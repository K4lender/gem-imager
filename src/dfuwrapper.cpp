/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#include "dfuwrapper.h"
#include <QDebug>
#include <QFile>
#include <QThread>
#include <string.h>
#include <stdlib.h>

extern "C" {
#include <libusb.h>
#include "dfu.h"
#include "dfu_file.h"
#include "dfu_load.h"
#include "dfu_util.h"
}

// dfu-util global state
extern "C" {
    int verbose = 0;
    struct dfu_if *dfu_root = nullptr;
    char *match_path = nullptr;
    int match_vendor = -1;
    int match_product = -1;
    int match_vendor_dfu = -1;
    int match_product_dfu = -1;
    int match_config_index = -1;
    int match_iface_index = -1;
    int match_iface_alt_index = -1;
    int match_devnum = -1;
    const char *match_iface_alt_name = nullptr;
    const char *match_serial = nullptr;
    const char *match_serial_dfu = nullptr;
}

DfuWrapper::DfuWrapper(QObject *parent)
    : QObject(parent), usbContext(nullptr), dfuDevice(nullptr), initialized(false)
{}

DfuWrapper::~DfuWrapper()
{
    cleanup();
}

void DfuWrapper::setError(const QString &msg)
{
    _lastError = msg;
    qDebug() << "DfuWrapper error:" << msg;
    emit statusMessage(msg);
}

bool DfuWrapper::initialize()
{
    if (initialized)
        return true;

    int ret = libusb_init(&usbContext);
    if (ret < 0) {
        setError(QString("Failed to initialize libusb: %1").arg(libusb_error_name(ret)));
        return false;
    }

    initialized = true;
    return true;
}

bool DfuWrapper::findDevice(int vendorId, int productId, const QString &altSettingName)
{
    if (!initialized) {
        setError("DFU not initialized");
        return false;
    }

    match_vendor  = vendorId;
    match_product = productId;

    _altNameBytes = altSettingName.toUtf8();
    match_iface_alt_name = altSettingName.isEmpty() ? nullptr : _altNameBytes.constData();

    for (int attempt = 0; attempt < 15; attempt++) {
        if (attempt > 0) {
            qDebug() << "Retry" << attempt << "searching for DFU device...";
            QThread::sleep(1);
        }
        disconnect_devices();
        probe_devices(usbContext);
        if (dfu_root)
            break;
    }

    if (!dfu_root) {
        setError(QString("No DFU device found (VID:0x%1 PID:0x%2 alt:%3) after 15 retries")
                .arg(vendorId, 4, 16, QChar('0'))
                .arg(productId, 4, 16, QChar('0'))
                .arg(altSettingName));
        return false;
    }

    dfuDevice = dfu_root;

    int ret = libusb_open(dfuDevice->dev, &dfuDevice->dev_handle);
    if (ret < 0) {
        setError(QString("Failed to open DFU device: %1").arg(libusb_error_name(ret)));
        return false;
    }

    emit statusMessage(QString("Found DFU device: %1:%2 alt:%3")
                      .arg(dfuDevice->vendor, 4, 16, QChar('0'))
                      .arg(dfuDevice->product, 4, 16, QChar('0'))
                      .arg(altSettingName));
    return true;
}

// Claim the USB interface and put the device in a known good state.
// Caller is responsible for releasing the interface on success.
bool DfuWrapper::claimInterface()
{
    int ret = libusb_claim_interface(dfuDevice->dev_handle, dfuDevice->interface);
    if (ret < 0) {
        setError(QString("Cannot claim interface: %1").arg(libusb_error_name(ret)));
        return false;
    }

    if (dfuDevice->flags & DFU_IFF_ALT) {
        ret = libusb_set_interface_alt_setting(dfuDevice->dev_handle,
                                               dfuDevice->interface,
                                               dfuDevice->altsetting);
        if (ret < 0) {
            setError(QString("Cannot set alternate interface: %1").arg(libusb_error_name(ret)));
            libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
            return false;
        }
    }

    struct dfu_status status;
    ret = dfu_get_status(dfuDevice, &status);
    if (ret < 0) {
        setError(QString("Error getting DFU status: %1").arg(libusb_error_name(ret)));
        libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
        return false;
    }

    if (status.bState == DFU_STATE_dfuERROR) {
        dfu_clear_status(dfuDevice->dev_handle, dfuDevice->interface);
        dfu_get_status(dfuDevice, &status);
    }

    if (status.bState == DFU_STATE_dfuDNLOAD_IDLE || status.bState == DFU_STATE_dfuUPLOAD_IDLE)
        dfu_abort(dfuDevice->dev_handle, dfuDevice->interface);

    return true;
}

bool DfuWrapper::downloadFile(const QString &filePath, bool resetAfter)
{
    if (!dfuDevice || !dfuDevice->dev_handle) {
        setError("No DFU device");
        return false;
    }

    if (!claimInterface())
        return false;

    struct dfu_file file;
    memset(&file, 0, sizeof(file));
    QByteArray filePathBytes = filePath.toUtf8();
    file.name = filePathBytes.constData();
    dfu_load_file(&file, MAYBE_SUFFIX, NO_PREFIX);

    if (!file.firmware || file.size.total == 0) {
        setError(QString("Failed to load file: %1").arg(filePath));
        libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
        if (file.firmware) free(file.firmware);
        return false;
    }

    emit statusMessage(QString("Downloading %1...").arg(filePath));
    int ret = dfuload_do_dnload(dfuDevice, getTransferSize(), &file);
    free(file.firmware);
    libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);

    if (ret < 0) {
        if (!resetAfter) {
            setError(QString("Download failed: %1").arg(libusb_error_name(ret)));
            return false;
        }
        // With resetAfter, I/O errors are expected (device resets after each bootloader stage).
        // Only reject errors that indicate a real problem unrelated to disconnect.
        switch (ret) {
        case LIBUSB_ERROR_INVALID_PARAM:
        case LIBUSB_ERROR_ACCESS:
        case LIBUSB_ERROR_BUSY:
        case LIBUSB_ERROR_OVERFLOW:
        case LIBUSB_ERROR_NO_MEM:
        case LIBUSB_ERROR_NOT_SUPPORTED:
            setError(QString("Download failed: %1").arg(libusb_error_name(ret)));
            return false;
        default:
            break; // IO/NO_DEVICE/PIPE/TIMEOUT/etc: expected disconnect
        }
    }

    if (resetAfter) {
        dfu_detach(dfuDevice->dev_handle, dfuDevice->interface, 1000);
        libusb_reset_device(dfuDevice->dev_handle);
        libusb_close(dfuDevice->dev_handle);
        dfuDevice->dev_handle = nullptr;
    }

    return true;
}

bool DfuWrapper::downloadFileStreaming(const QString &filePath)
{
    if (!dfuDevice || !dfuDevice->dev_handle) {
        setError("No DFU device");
        return false;
    }

    if (!claimInterface())
        return false;

    QFile file(filePath);
    if (!file.open(QIODevice::ReadOnly)) {
        setError(QString("Failed to open file: %1").arg(filePath));
        libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
        return false;
    }

    qint64 fileSize = file.size();
    if (fileSize == 0) {
        setError("Image file is empty, cannot transfer");
        libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
        return false;
    }

    int xfer_size = getTransferSize();
    if (xfer_size <= 0)
        xfer_size = 4096;

    // U-Boot's rawemmc alt-setting can take minutes to flush its DFU buffer to eMMC
    dfu_set_timeout(300000);

    emit statusMessage(QString("Streaming %1 MB to device (this may take several minutes)...")
                       .arg(fileSize / 1024 / 1024));

    QByteArray buf(xfer_size, 0);
    unsigned short transaction = 0;
    qint64 bytesSent = 0;
    bool ok = true;

    while (bytesSent < fileSize && ok) {
        qint64 bytesRead = file.read(buf.data(), qMin((qint64)xfer_size, fileSize - bytesSent));
        if (bytesRead <= 0) {
            setError("File read error during streaming");
            ok = false;
            break;
        }

        int ret = dfu_download(dfuDevice->dev_handle, dfuDevice->interface,
                               (unsigned short)bytesRead, transaction++,
                               (unsigned char *)buf.data());
        if (ret < 0) {
            setError(QString("Download error: %1").arg(libusb_error_name(ret)));
            ok = false;
            break;
        }

        bytesSent += bytesRead;

        // Poll until device is ready for the next chunk
        struct dfu_status dst;
        do {
            ret = dfu_get_status(dfuDevice, &dst);
            if (ret < 0) {
                setError(QString("Status poll error: %1").arg(libusb_error_name(ret)));
                ok = false;
                break;
            }
            if (dst.bState == DFU_STATE_dfuDNLOAD_IDLE || dst.bState == DFU_STATE_dfuERROR)
                break;
            QThread::msleep(dst.bwPollTimeout > 0 ? dst.bwPollTimeout : 1);
        } while (1);

        if (!ok) break;

        if (dst.bStatus != DFU_STATUS_OK) {
            setError(QString("DFU device error: state=%1 status=%2").arg(dst.bState).arg(dst.bStatus));
            ok = false;
            break;
        }

        if ((bytesSent % (10LL * 1024 * 1024)) < xfer_size || bytesSent == fileSize)
            emit statusMessage(QString("Transferred %1 / %2 MB...")
                               .arg(bytesSent / 1024 / 1024).arg(fileSize / 1024 / 1024));
    }

    file.close();

    // Verify all bytes were actually sent before signalling end of transfer.
    // If bytesSent < fileSize the loop exited early due to an error (ok == false).
    if (ok && bytesSent != fileSize) {
        setError(QString("Transfer incomplete: sent %1 of %2 bytes")
                 .arg(bytesSent).arg(fileSize));
        ok = false;
    }

    if (ok) {
        // Zero-length packet signals end of transfer
        dfu_download(dfuDevice->dev_handle, dfuDevice->interface, 0, transaction, nullptr);

        // Wait for manifest phase (final eMMC flush)
        emit statusMessage("Waiting for device to complete writing...");
        struct dfu_status finalStatus;
        bool manifestOk = false;
        for (;;) {
            memset(&finalStatus, 0, sizeof(finalStatus));
            int ret = dfu_get_status(dfuDevice, &finalStatus);
            if (ret < 0) {
                // Device disconnected. This is expected only after a successful
                // manifest (MANIFEST_WAIT_RST or IDLE was seen before disconnect).
                // If we never saw a terminal state, treat as error.
                if (!manifestOk) {
                    setError("Device disconnected unexpectedly during manifest phase");
                    ok = false;
                }
                break;
            }

            if (finalStatus.bState == DFU_STATE_dfuIDLE) {
                manifestOk = true;
                break;
            }
            if (finalStatus.bState == DFU_STATE_dfuMANIFEST_WAIT_RST) {
                manifestOk = true;
                libusb_reset_device(dfuDevice->dev_handle);
                break;
            }
            if (finalStatus.bState == DFU_STATE_dfuMANIFEST) {
                // Still writing — keep polling
                manifestOk = false;
            }
            if (finalStatus.bState == DFU_STATE_dfuERROR) {
                setError(QString("DFU error in manifest phase: status=%1").arg(finalStatus.bStatus));
                ok = false;
                break;
            }

            unsigned int pollMs = finalStatus.bwPollTimeout > 0 ? finalStatus.bwPollTimeout : 100;
            QThread::msleep(pollMs);
        }

        if (ok) {
            // Send DFU_DETACH to trigger U-Boot's board_dfu_complete() callback,
            // which writes boot binaries (tiboot3.bin etc.) to eMMC boot partition.
            emit statusMessage("Triggering eMMC boot partition write...");
            dfu_detach(dfuDevice->dev_handle, dfuDevice->interface, 1000);
        }
    }

    dfu_set_timeout(5000);
    libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
    return ok;
}

void DfuWrapper::cleanup()
{
    if (dfuDevice && dfuDevice->dev_handle) {
        libusb_close(dfuDevice->dev_handle);
        dfuDevice->dev_handle = nullptr;
    }
    disconnect_devices();
    dfuDevice = nullptr;

    if (usbContext) {
        libusb_exit(usbContext);
        usbContext = nullptr;
    }
    initialized = false;
}

int DfuWrapper::getTransferSize()
{
    if (!dfuDevice)
        return 0;
    int size = dfuDevice->func_dfu.wTransferSize;
    return size > 0 ? size : 1024;
}
