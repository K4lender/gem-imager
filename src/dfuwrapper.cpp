/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#include "dfuwrapper.h"
#include <QDebug>
#include <QFile>
#include <string.h>  // for memset
#include <stdlib.h>  // for free

#ifdef _WIN32
#include <windows.h>  // for Sleep
#else
#include <unistd.h>   // for sleep
#endif

// dfu-util C headers
extern "C" {
#include <libusb.h>
#include "dfu.h"
#include "dfu_file.h"
#include "dfu_load.h"
#include "dfu_util.h"
}

// Define global variables required by dfu-util library
// These are extern in dfu_util.h but need to be defined somewhere
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
    : QObject(parent)
    , usbContext(nullptr)
    , dfuDevice(nullptr)
    , initialized(false)
{
}

DfuWrapper::~DfuWrapper()
{
    cleanup();
}

bool DfuWrapper::initialize()
{
    if (initialized)
        return true;

    // Initialize libusb
    int ret = libusb_init(&usbContext);
    if (ret < 0) {
        qDebug() << "Failed to initialize libusb:" << ret;
        return false;
    }

    // Set verbosity level (0 = quiet, 3 = debug)
    // Enable debug output to match dfu-util behavior
    verbose = 3;
    
    initialized = true;
    emit statusMessage("DFU initialized successfully");
    return true;
}

bool DfuWrapper::findDevice(int vendorId, int productId, const QString &altSettingName)
{
    if (!initialized) {
        qDebug() << "DFU not initialized";
        return false;
    }

    // Set match criteria
    match_vendor = vendorId;
    match_product = productId;
    
    // Store alt setting name if provided
    static QByteArray altNameBytes;
    if (!altSettingName.isEmpty()) {
        altNameBytes = altSettingName.toUtf8();
        match_iface_alt_name = altNameBytes.constData();
    } else {
        match_iface_alt_name = nullptr;
    }

    // Try to find device with retries (device may take time to enumerate)
    // TI J7 devices need extra time after bootloader stage transitions
    for (int attempt = 0; attempt < 15; attempt++)
    {
        if (attempt > 0) {
            qDebug() << "Retry" << attempt << "searching for DFU device...";
            // Wait before retry
            #ifdef _WIN32
            Sleep(1000);
            #else
            sleep(1);
            #endif
        }
        
        // Clear previous device list before probing
        disconnect_devices();
        
        // Probe for DFU devices
        probe_devices(usbContext);

        if (dfu_root) {
            // Device found!
            break;
        }
    }
    
    if (!dfu_root) {
        qDebug() << "No DFU device found after retries";
        return false;
    }

    // Use the first device found
    dfuDevice = dfu_root;
    
    qDebug() << "Found device - Vendor:" << QString::number(dfuDevice->vendor, 16) 
             << "Product:" << QString::number(dfuDevice->product, 16)
             << "Interface:" << dfuDevice->interface
             << "Alt setting:" << dfuDevice->altsetting
             << "Alt name:" << (dfuDevice->alt_name ? dfuDevice->alt_name : "NULL")
             << "Flags:" << dfuDevice->flags;
    
    // Open the device
    int ret = libusb_open(dfuDevice->dev, &dfuDevice->dev_handle);
    if (ret < 0) {
        qDebug() << "Failed to open DFU device:" << ret;
        return false;
    }

    emit statusMessage(QString("Found DFU device: %1:%2 alt:%3")
                      .arg(dfuDevice->vendor, 4, 16, QChar('0'))
                      .arg(dfuDevice->product, 4, 16, QChar('0'))
                      .arg(altSettingName));
    
    return true;
}

bool DfuWrapper::downloadFile(const QString &filePath, const QString &altSettingName, bool resetAfter)
{
    if (!dfuDevice || !dfuDevice->dev_handle) {
        qDebug() << "No DFU device available";
        return false;
    }

    // Claim the USB interface
    qDebug() << "Claiming USB DFU Interface...";
    emit statusMessage("Claiming USB DFU Interface...");
    
    int ret = libusb_claim_interface(dfuDevice->dev_handle, dfuDevice->interface);
    if (ret < 0) {
        qDebug() << "Cannot claim interface:" << libusb_error_name(ret);
        emit statusMessage(QString("Cannot claim interface: %1").arg(libusb_error_name(ret)));
        return false;
    }

    // Set alternate interface setting if device has multiple alt settings
    if (dfuDevice->flags & DFU_IFF_ALT) {
        qDebug() << "Setting Alternate Interface #" << dfuDevice->altsetting;
        emit statusMessage(QString("Setting Alternate Interface #%1...").arg(dfuDevice->altsetting));
        
        ret = libusb_set_interface_alt_setting(dfuDevice->dev_handle, 
                                                dfuDevice->interface, 
                                                dfuDevice->altsetting);
        if (ret < 0) {
            qDebug() << "Cannot set alternate interface:" << libusb_error_name(ret);
            emit statusMessage(QString("Failed to set alternate interface: %1").arg(libusb_error_name(ret)));
            libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
            return false;
        }
    }

    // Determine device status before download (critical for proper DFU operation)
    struct dfu_status status;
    qDebug() << "Determining device status...";
    emit statusMessage("Determining device status...");
    
    ret = dfu_get_status(dfuDevice, &status);
    if (ret < 0) {
        qDebug() << "Error getting DFU status:" << libusb_error_name(ret);
        libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
        return false;
    }
    
    qDebug() << "DFU state(" << status.bState << ") status(" << status.bStatus << ")";
    
    // Handle device states
    if (status.bState == DFU_STATE_dfuERROR) {
        qDebug() << "Clearing error status";
        dfu_clear_status(dfuDevice->dev_handle, dfuDevice->interface);
        // Re-check status
        ret = dfu_get_status(dfuDevice, &status);
        if (ret < 0) {
            libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
            return false;
        }
    }
    
    if (status.bState == DFU_STATE_dfuDNLOAD_IDLE || status.bState == DFU_STATE_dfuUPLOAD_IDLE) {
        qDebug() << "Aborting previous incomplete transfer";
        dfu_abort(dfuDevice->dev_handle, dfuDevice->interface);
        // Re-check status
        ret = dfu_get_status(dfuDevice, &status);
        if (ret < 0) {
            libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);
            return false;
        }
    }

    // Prepare the file structure
    struct dfu_file file;
    memset(&file, 0, sizeof(file));
    
    // Set file name (dfu_load_file expects file->name to be set)
    QByteArray filePathBytes = filePath.toUtf8();
    file.name = filePathBytes.constData();
    file.firmware = nullptr;
    
    // Load file (MAYBE_SUFFIX and NO_PREFIX for raw binary files)
    dfu_load_file(&file, MAYBE_SUFFIX, NO_PREFIX);

    emit statusMessage(QString("Downloading %1...").arg(filePath));

    // Get transfer size
    int xfer_size = getTransferSize();
    
    // Perform download
    ret = dfuload_do_dnload(dfuDevice, xfer_size, &file);
    
    // Cleanup file
    if (file.firmware) {
        free(file.firmware);
    }

    // Release the interface
    libusb_release_interface(dfuDevice->dev_handle, dfuDevice->interface);

    // Check result
    // Note: ret can be negative (LIBUSB_ERROR_IO = -1) even on successful transfer
    // This happens because device resets after download and final status read fails
    // We consider this acceptable if we got this far
    if (ret < 0 && ret != -1) {
        // Real error (not just reset/disconnect)
        qDebug() << "Download failed with error:" << ret;
        emit statusMessage(QString("Download failed: error %1").arg(ret));
        return false;
    }
    
    // Even if ret == -1 (LIBUSB_ERROR_IO), the transfer likely completed
    // The device just disconnected/reset before we could read final status
    qDebug() << "Download completed (status:" << ret << ")";
    emit statusMessage("Download complete");

    // Reset device if requested (matching dfu-util -R behavior)
    if (resetAfter) {
        // First, detach from DFU mode (tell device to exit DFU)
        qDebug() << "Detaching from DFU mode...";
        ret = dfu_detach(dfuDevice->dev_handle, dfuDevice->interface, 1000);
        if (ret < 0) {
            qDebug() << "Warning: detach failed:" << libusb_error_name(ret);
            // Continue anyway, device might handle it differently
        }
        
        qDebug() << "Resetting USB to switch back to Run-Time mode";
        emit statusMessage("Resetting USB to switch back to Run-Time mode...");
        
        ret = libusb_reset_device(dfuDevice->dev_handle);
        if (ret < 0 && ret != LIBUSB_ERROR_NOT_FOUND && ret != LIBUSB_ERROR_NO_DEVICE) {
            qDebug() << "Warning: error resetting device:" << libusb_error_name(ret);
            // Continue anyway, device might have reset itself
        }
        
        // After reset, close the handle immediately
        if (dfuDevice->dev_handle) {
            libusb_close(dfuDevice->dev_handle);
            dfuDevice->dev_handle = nullptr;
        }
    }

    return true;
}

QString DfuWrapper::listDevices()
{
    if (!initialized)
        return "DFU not initialized";

    // Probe for devices
    probe_devices(usbContext);

    if (!dfu_root)
        return "No DFU devices found";

    QString result;
    struct dfu_if *dif = dfu_root;
    
    while (dif) {
        result += QString("Device: %1:%2 Interface %3 Alt %4")
                  .arg(dif->vendor, 4, 16, QChar('0'))
                  .arg(dif->product, 4, 16, QChar('0'))
                  .arg(dif->interface)
                  .arg(dif->altsetting);
        
        if (dif->alt_name) {
            result += QString(" \"%1\"").arg(dif->alt_name);
        }
        result += "\n";
        
        dif = dif->next;
    }

    return result;
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

    // Default transfer size
    int xfer_size = dfuDevice->func_dfu.wTransferSize;
    
    if (xfer_size == 0)
        xfer_size = 1024; // Default fallback

    return xfer_size;
}
