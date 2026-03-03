/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#include "dfuthread.h"
#include "dfuwrapper.h"
#include "config.h"
#include "devicewrapper.h"
#include "devicewrapperfatpartition.h"
#include "downloadextractthread.h"
#include <QFile>
#include <QDebug>
#include <QThread>
#include <QCoreApplication>

DfuThread::DfuThread(const QByteArray &url, const QByteArray &localfilename,
                     const QByteArray &expectedHash, QObject *parent)
    : DownloadExtractThread(url, localfilename, expectedHash, parent)
    , _tempImageFile(nullptr)
{
    _suppressSuccessSignal = true;
    _ejectEnabled = false;
}

DfuThread::~DfuThread()
{
    for (int i = 0; i < 3; i++)
        if (!_bootloaderFiles[i].isEmpty())
            QFile::remove(_bootloaderFiles[i]);

    if (_tempImageFile) {
        _tempImageFile->remove();
        delete _tempImageFile;
    }
}

bool DfuThread::isImage()
{
    return true;
}

bool DfuThread::_openAndPrepareDevice()
{
    _tempImageFile = new QTemporaryFile();
    _tempImageFile->setAutoRemove(false);

    if (!_tempImageFile->open()) {
        emit error(tr("Failed to create temporary file for DFU image"));
        return false;
    }

    _tempImagePath = _tempImageFile->fileName();
    _tempImageFile->close();

    _filename = _tempImagePath.toLatin1();
    _file.setFileName(_tempImagePath);
    if (!_file.open(QIODevice::ReadWrite | QIODevice::Unbuffered)) {
        emit error(tr("Failed to open temporary file for DFU image"));
        return false;
    }

    return true;
}

void DfuThread::run()
{
    emit preparationStatusUpdate(tr("Initializing DFU..."));

    if (_url.isEmpty() || _url == "dfu") {
        emit error(tr("DFU mode requires an image URL"));
        return;
    }

    emit dfuProgress(5, tr("Downloading image..."));
    DownloadExtractThread::run();
    waitForExtractThread();
    if (!_successful) return;

    if (!_geminit.isEmpty() || !_config.isEmpty() || !_cmdline.isEmpty() || !_firstrun.isEmpty() || !_cloudinit.isEmpty()) {
        emit dfuProgress(35, tr("Customizing image..."));
        if (_file.isOpen()) _file.close();
        _file.setFileName(_tempImagePath);
        if (!_file.open(QIODevice::ReadWrite | QIODevice::Unbuffered)) {
            emit error(tr("Failed to reopen image for customization: %1").arg(_file.errorString()));
            return;
        }
        if (!_customizeImage()) return;
        _file.close();
    }

    emit dfuProgress(38, tr("Extracting bootloader files from image..."));
    if (!extractBootloaderFromImage()) return;

    emit dfuProgress(45, tr("Sending bootloader files..."));
    if (!sendBootloaderFiles()) return;

    emit dfuProgress(77, tr("Waiting for device to enter DFU mode..."));
    QThread::sleep(3);

    emit dfuProgress(80, tr("Sending image to device (this may take several minutes)..."));
    if (!sendImageToRawemmc()) return;

    emit dfuProgress(95, tr("Writing boot binaries to eMMC (do not power off)..."));
    QThread::sleep(15);

    emit dfuProgress(100, tr("System image sent successfully!"));
    QThread::msleep(1000);
    emit success();
}

// Helper: create a DfuWrapper, find the device, transfer a file, clean up.
bool DfuThread::runDfu(const QString &altSetting, const QString &filePath, bool resetAfter)
{
    DfuWrapper *dfu = new DfuWrapper(nullptr);

    bool ok = dfu->initialize()
           && dfu->findDevice(DfuWrapper::TI_VENDOR_ID, DfuWrapper::TI_PRODUCT_ID, altSetting)
           && (resetAfter ? dfu->downloadFile(filePath, true)
                          : dfu->downloadFileStreaming(filePath));

    if (!ok)
        emit error(tr("DFU failed (alt: %1): %2").arg(altSetting, dfu->lastError()));

    dfu->cleanup();
    delete dfu;
    return ok;
}

bool DfuThread::sendBootloaderFiles()
{
    const char *altSettings[] = {
        DfuWrapper::ALT_BOOTLOADER,
        DfuWrapper::ALT_TISPL,
        DfuWrapper::ALT_UBOOT,
    };

    for (int i = 0; i < 3; i++) {
        emit dfuProgress(45 + i * 10, tr("Sending %1...").arg(altSettings[i]));
        if (!runDfu(altSettings[i], _bootloaderFiles[i], true))
            return false;
        emit dfuProgress(55 + i * 10, tr("%1 sent").arg(altSettings[i]));

        if (i < 2) {
            emit dfuProgress(55 + i * 10, tr("Waiting for device to reconnect..."));
            QThread::sleep(2);
        }
    }

    return true;
}

bool DfuThread::extractBootloaderFromImage()
{
    QStringList fileNames = {"tiboot3.bin", "tispl.bin", "u-boot.img"};

    if (_file.isOpen())
        _file.close();

    _file.setFileName(_tempImagePath.replace("\\", "/"));
    if (!_file.open(QIODevice::ReadOnly)) {
        emit error(tr("Failed to reopen image file: %1").arg(_file.errorString()));
        return false;
    }

    try {
        _file.seek(0);
        DeviceWrapper dw(&_file);
        DeviceWrapperFatPartition *fat = dw.fatPartition(1);

        for (int i = 0; i < 3; i++) {
            QByteArray data = fat->readFile(fileNames[i]);
            if (data.isEmpty()) {
                emit error(tr("Bootloader file not found in image: %1").arg(fileNames[i]));
                return false;
            }

#ifdef Q_OS_WIN
            QTemporaryFile tmp(QCoreApplication::applicationDirPath() + "/dfu_XXXXXX");
#else
            QTemporaryFile tmp;
#endif
            tmp.setAutoRemove(false);
            if (!tmp.open()) {
                emit error(tr("Failed to create temp file for %1").arg(fileNames[i]));
                return false;
            }

            if (tmp.write(data) != data.size()) {
                emit error(tr("Failed to write temp file for %1").arg(fileNames[i]));
                return false;
            }
            tmp.close();
            _bootloaderFiles[i] = tmp.fileName();
            qDebug() << "Extracted" << fileNames[i] << ":" << data.size() << "bytes";
        }
    }
    catch (std::exception &e) {
        emit error(tr("Error reading bootloader files from image: %1").arg(e.what()));
        return false;
    }

    return true;
}

bool DfuThread::sendImageToRawemmc()
{
    if (!QFile::exists(_tempImagePath)) {
        emit error(tr("Image not found: %1").arg(_tempImagePath));
        return false;
    }
    return runDfu(DfuWrapper::ALT_RAWEMMC, _tempImagePath, false);
}
