/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#ifndef DFUWRAPPER_H
#define DFUWRAPPER_H

#include <QString>
#include <QObject>

// Forward declarations for dfu-util types
struct dfu_if;
struct dfu_file;
struct libusb_context;

class DfuWrapper : public QObject
{
    Q_OBJECT

public:
    explicit DfuWrapper(QObject *parent = nullptr);
    ~DfuWrapper();

    // Initialize libusb and DFU
    bool initialize();
    
    // Find DFU devices
    bool findDevice(int vendorId, int productId, const QString &altSettingName);
    
    // Download file to device
    bool downloadFile(const QString &filePath, const QString &altSettingName, bool resetAfter = true);
    
    // List available DFU devices
    QString listDevices();
    
    // Cleanup
    void cleanup();

signals:
    void progress(int percentage, QString message);
    void statusMessage(QString message);

private:
    struct libusb_context *usbContext;
    struct dfu_if *dfuDevice;
    bool initialized;
    
    // Helper functions
    bool openFile(const QString &filePath, struct dfu_file **file);
    void closeFile(struct dfu_file *file);
    int getTransferSize();
};

#endif // DFUWRAPPER_H
