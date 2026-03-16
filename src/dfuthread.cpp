/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#include "dfuthread.h"
#include "dfuwrapper.h"
#include "config.h"
#include "downloadextractthread.h"
#include <QFile>
#include <QDebug>
#include <QThread>
#include <QCryptographicHash>
#include <QCoreApplication>
#include <QStandardPaths>
#include <QDir>
#include <QFileInfo>
#include <QUrl>
#include <QJsonDocument>
#include <QJsonObject>
#include <QJsonArray>

#include <QEventLoop>
#include <QNetworkAccessManager>
#include <QNetworkRequest>
#include <QNetworkReply>

DfuThread::DfuThread(const QByteArray &url, const QByteArray &localfilename,
                     const QByteArray &expectedHash, const QByteArray &tiboot3Hash,
                     const QByteArray &tisplHash, const QByteArray &ubootHash, QObject *parent)
    : DownloadExtractThread(url, localfilename, expectedHash, parent)
    , _tempImageFile(nullptr)
    , _expectedTiboot3Hash(tiboot3Hash)
    , _expectedTisplHash(tisplHash)
    , _expectedUbootHash(ubootHash)
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

    emit dfuProgress(38, tr("Fetching bootloader files..."));
    if (!fetchBootloaderFiles()) return;

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

bool DfuThread::fetchBootloaderFiles()
{
    QString listUrlStr = QString(BOOTIMG_URL).arg("t3-gem-o1").arg("list.json");
    
    emit dfuProgress(40, tr("Fetching bootloader list..."));

    QNetworkAccessManager manager;
    QNetworkRequest request((QUrl(listUrlStr)));
    request.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::NoLessSafeRedirectPolicy);
    
    QNetworkReply *reply = manager.get(request);
    QEventLoop loop;
    connect(reply, &QNetworkReply::finished, &loop, &QEventLoop::quit);
    loop.exec();

    if (reply->error() == QNetworkReply::NoError) {
        QByteArray jsonData = reply->readAll();
        QJsonDocument doc = QJsonDocument::fromJson(jsonData);
        QJsonObject root = doc.object();
        QJsonArray filesArr = root["files"].toArray();
        
        for (int j = 0; j < filesArr.size(); ++j) {
            QJsonObject fileObj = filesArr[j].toObject();
            QString name = fileObj["name"].toString();
            QByteArray hash = fileObj["sha256"].toString().toUtf8();
            
            if (name == "tiboot3.bin") _expectedTiboot3Hash = hash;
            else if (name == "tispl.bin") _expectedTisplHash = hash;
            else if (name == "u-boot.img") _expectedUbootHash = hash;
        }
        qDebug() << "Updated bootloader hashes from list.json successfully.";
    } else {
        qDebug() << "Failed to fetch list.json from" << listUrlStr << ". Error:" << reply->errorString();
    }
    reply->deleteLater();

    QStringList fileNames = {"tiboot3.bin", "tispl.bin", "u-boot.img"};
    QList<QByteArray> expectedHashes = {_expectedTiboot3Hash, _expectedTisplHash, _expectedUbootHash};

    QString cacheDir = QStandardPaths::writableLocation(QStandardPaths::CacheLocation) + QDir::separator() + "bootloaders" + QDir::separator() + "t3-gem-o1";
    QDir().mkpath(cacheDir);

    for (int i = 0; i < 3; i++) {
        QString fileName = fileNames[i];
        QByteArray expectedHash = expectedHashes[i];
#ifdef Q_OS_WIN
        QTemporaryFile tmp(QCoreApplication::applicationDirPath() + "/dfu_XXXXXX");
#else
        QTemporaryFile tmp;
#endif
        tmp.setAutoRemove(false);
        if (!tmp.open()) {
            emit error(tr("Failed to create temp file for %1").arg(fileName));
            return false;
        }
        tmp.close();

        QString localCachePath = cacheDir + QDir::separator() + fileName;
        QFileInfo fi(localCachePath);

        QString urlstr;
        bool useCache = false;

        if (fi.exists() && fi.size() > 0) {
            if (!expectedHash.isEmpty()) {
                QFile f(localCachePath);
                if (f.open(QIODevice::ReadOnly)) {
                    QCryptographicHash hash(QCryptographicHash::Sha256);
                    if (hash.addData(&f)) {
                        if (hash.result().toHex() == expectedHash) {
                            useCache = true;
                        } else {
                            qDebug() << "Cache hash mismatch for" << fileName << "expected:" << expectedHash << "got:" << hash.result().toHex();
                        }
                    }
                    f.close();
                }
            } else {
                useCache = true;
            }
        }

        if (useCache) {
            urlstr = QUrl::fromLocalFile(localCachePath).toString(QUrl::FullyEncoded);
        } else {
            urlstr = QString(BOOTIMG_URL).arg("t3-gem-o1").arg(fileName);
            if (fi.exists()) {
                QFile::remove(localCachePath);
            }
        }

        DownloadThread dt(urlstr.toUtf8(), tmp.fileName().toUtf8(), expectedHash, true);
        if (urlstr.startsWith("http")) {
            dt.setCacheFile(localCachePath);
        }

        dt.start();
        dt.wait();

        if (!dt.successfull()) {
            emit error(tr("Failed to download bootloader file: %1").arg(fileName));
            QFile::remove(localCachePath); // clean up failed cache
            return false;
        }

        _bootloaderFiles[i] = tmp.fileName();
        qDebug() << "Ready" << fileName << "from" << urlstr;
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
