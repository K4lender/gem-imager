/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

 #include "dfuthread.h"
 #include "dfuwrapper.h"
 #include <QProcess>
 #include <QFile>
 #include <QDir>
 #include <QDebug>
 #include <QThread>
 #include <QTextStream>
 #include <QCoreApplication>
 #include <QStandardPaths>
 #include <QNetworkAccessManager>
 #include <QNetworkRequest>
 #include <QNetworkReply>
 #include <QEventLoop>
 #include <QDate>
 
 #ifdef Q_OS_LINUX
 #include <unistd.h>  // For geteuid()
 #endif
 
 DfuThread::DfuThread(QObject *parent)
     : QThread(parent)
 {
 }
 
 void DfuThread::setTestFilesPath(const QString &path)
 {
     _testFilesPath = path;
 }
 
 void DfuThread::setImageInfo(const QString &board, const QString &imageType, const QString &distro, const QString &variant)
 {
     _board = board;
     _imageType = imageType;
     _distro = distro;
     _variant = variant;
 }
 
 void DfuThread::run()
 {
     emit preparationStatusUpdate(tr("Initializing DFU..."));
     
     // TI J7 device USB ID
     const int TI_VENDOR_ID = 0x0451;
     const int TI_PRODUCT_ID = 0x6165;
     
     // Step 1: Download system image if image info is set
     QString extractedImagePath;
     if (!_board.isEmpty() && !_imageType.isEmpty() && !_distro.isEmpty())
     {
         emit progressUpdate(5, tr("Preparing to download system image..."));
         
         // Extract variant from imageType
         QString imageType = _imageType;
         QString variant = _variant.isEmpty() ? "minimal" : _variant;
         
         if (imageType.contains('/')) {
             QStringList parts = imageType.split('/');
             imageType = parts[0];
             variant = parts[1];
         }
         
         if (variant.isEmpty()) {
             variant = "minimal";
         }
         
         // Fixed release version
         QString release = "v2025.12";
         
         // Construct filename: gemstone-{variant}-{release}-{distro}-{suite}-{machine}.img.xz
         QString filename = QString("gemstone-%1-%2-%3-%4-%5.img.xz")
                           .arg(variant)
                           .arg(release)
                           .arg(_distro)
                           .arg(imageType)
                           .arg(_board);
         
         QString imageUrl = QString("https://packages.t3gemstone.org/images/%1/%2/%3/%4")
                           .arg(_distro)
                           .arg(imageType)
                           .arg(_board)
                           .arg(filename);
         
         qDebug() << "DFU image URL:" << imageUrl;
         emit preparationStatusUpdate(tr("Downloading system image: %1").arg(filename));
         
         // Create gem-imager directory in user's home (even when running with sudo)
         QString homeDir = qEnvironmentVariable("HOME");
         if (homeDir.isEmpty() || homeDir == "/root") {
             // If running as sudo, try to get the original user's home
             QString sudoUser = qEnvironmentVariable("SUDO_USER");
             if (!sudoUser.isEmpty()) {
                 homeDir = "/home/" + sudoUser;
             } else {
                 // Fallback to current directory
                 homeDir = QDir::currentPath();
             }
         }
         QString gemImagerDir = homeDir + "/gem-imager";
         QDir().mkpath(gemImagerDir);
         
         QString compressedImagePath = gemImagerDir + "/" + filename;
         
         // Download image (5-40% progress)
         if (!downloadImage(imageUrl, compressedImagePath))
         {
             emit error(tr("Failed to download system image from: %1").arg(imageUrl));
             return;
         }
         
         emit progressUpdate(40, tr("Extracting image from archive..."));
         
         // Extract .xz file
         extractedImagePath = gemImagerDir + "/" + filename.replace(".img.xz", ".img");
         if (!extractXzFile(compressedImagePath, extractedImagePath))
         {
             emit error(tr("Failed to extract image from archive"));
             QFile::remove(compressedImagePath);
             return;
         }
         
         // Remove compressed file to save space
         QFile::remove(compressedImagePath);
         
         emit progressUpdate(50, tr("Image extracted successfully"));
     }
     
     // Step 2: Send bootloader files
     emit progressUpdate(52, tr("Preparing bootloader files..."));
     
     // List of files to send in order
     QStringList files;
     files << "tiboot3.bin" << "tispl.bin" << "u-boot.img";
     
     // For TI J7 devices, map files to their alt setting names
     QStringList altSettingNames;
     altSettingNames << "bootloader" << "tispl.bin" << "u-boot.img";
     
     // Verify all files exist
     for (const QString &file : files)
     {
         QString filePath = _testFilesPath + "/" + file;
         if (!QFile::exists(filePath))
         {
             emit error(tr("Bootloader file not found: %1").arg(filePath));
             if (!extractedImagePath.isEmpty()) {
                 QFile::remove(extractedImagePath);
             }
             return;
         }
     }
     
     emit progressUpdate(55, tr("Sending bootloader files..."));
     
     int currentProgress = 55;
     int progressPerFile = 20 / files.size(); // 55-75% range
     
     for (int i = 0; i < files.size(); ++i)
     {
         QString filePath = _testFilesPath + "/" + files[i];
         
         emit progressUpdate(currentProgress, tr("Sending %1...").arg(files[i]));
         
         // Create new DFU wrapper for each file (device reconnects between files)
         DfuWrapper *dfu = new DfuWrapper(nullptr);
         
         if (!dfu->initialize()) {
             emit error(tr("Failed to initialize DFU for %1").arg(files[i]));
             delete dfu;
             if (!extractedImagePath.isEmpty()) {
                 QFile::remove(extractedImagePath);
             }
             return;
         }
         
         // Find DFU device with specific alt setting
         if (!dfu->findDevice(TI_VENDOR_ID, TI_PRODUCT_ID, altSettingNames[i])) {
             emit error(tr("Failed to find DFU device for %1 (alt: %2)").arg(files[i]).arg(altSettingNames[i]));
             delete dfu;
             if (!extractedImagePath.isEmpty()) {
                 QFile::remove(extractedImagePath);
             }
             return;
         }
         
         // Download file
         // Reset after EVERY file transfer (matching dfu-util -R behavior)
         bool resetAfter = true;
         if (!dfu->downloadFile(filePath, altSettingNames[i], resetAfter)) {
             emit error(tr("Failed to download %1").arg(files[i]));
             delete dfu;
             if (!extractedImagePath.isEmpty()) {
                 QFile::remove(extractedImagePath);
             }
             return;
         }
         
         // Cleanup this DFU instance
         dfu->cleanup();
         delete dfu;
         
         currentProgress += progressPerFile;
         emit progressUpdate(currentProgress, tr("%1 sent successfully").arg(files[i]));
         
         // Wait for device reconnect (except after last file)
         if (i < files.size() - 1)
         {
             emit progressUpdate(currentProgress, tr("Waiting for device to reconnect..."));
             
             // Wait for device to re-enumerate in DFU mode
             // With proper dfu_detach, device transitions quickly
             QThread::sleep(5);
         }
     }
     
     emit progressUpdate(75, tr("Bootloader files sent successfully"));
     
     // Step 3: Send system image to rawemmc if we downloaded one
     if (!extractedImagePath.isEmpty())
     {
         emit progressUpdate(78, tr("Waiting for device to enter image transfer mode..."));
         QThread::sleep(10);  // Wait for rawemmc to appear
         
         emit progressUpdate(80, tr("Sending system image to device (this may take several minutes)..."));
         
         // Send image to rawemmc partition
         if (!sendImageToRawemmc(extractedImagePath))
         {
             emit error(tr("Failed to send image to device"));
             QFile::remove(extractedImagePath);
             return;
         }
         
         // Clean up extracted file
         QFile::remove(extractedImagePath);
         
         emit progressUpdate(100, tr("System image sent successfully!"));
     }
     else
     {
         emit progressUpdate(100, tr("All bootloader files sent successfully. Device should boot now."));
     }
     
     QThread::msleep(1000);
     emit success();
 }
 
 bool DfuThread::checkDfuUtil()
 {
     // DFU functionality is now built into the application
     return true;
 }
 
 bool DfuThread::installDfuUtil()
 {
     // DFU functionality is built into the application
     // No installation needed
     return true;
 }
 
 bool DfuThread::downloadImage(const QString &url, const QString &outputPath)
 {
     emit preparationStatusUpdate(tr("Downloading from: %1").arg(url));
     qDebug() << "Downloading image from:" << url;
     qDebug() << "Output path:" << outputPath;
     
     QNetworkAccessManager manager;
     QNetworkRequest request(url);
     
     // Start download
     QNetworkReply *reply = manager.get(request);
     
     // Open output file
     QFile outputFile(outputPath);
     if (!outputFile.open(QIODevice::WriteOnly))
     {
         qDebug() << "Failed to open output file:" << outputPath;
         reply->deleteLater();
         return false;
     }
     
     qint64 totalBytes = 0;
     qint64 downloadedBytes = 0;
     
     // Connect to progress signal
     connect(reply, &QNetworkReply::downloadProgress, this, 
             [this, &downloadedBytes, &totalBytes](qint64 received, qint64 total) {
         downloadedBytes = received;
         if (total > 0) {
             totalBytes = total;
             int percentage = 5 + (received * 35 / total); // 5-40% range for download
             emit progressUpdate(percentage, 
                 tr("Downloading: %1 MB / %2 MB")
                     .arg(received / 1024 / 1024)
                     .arg(total / 1024 / 1024));
         }
     });
     
     // Event loop to wait for download
     QEventLoop loop;
     connect(reply, &QNetworkReply::finished, &loop, &QEventLoop::quit);
     
     // Write data as it arrives
     connect(reply, &QNetworkReply::readyRead, [&]() {
         outputFile.write(reply->readAll());
     });
     
     loop.exec();
     
     // Check for errors
     if (reply->error() != QNetworkReply::NoError)
     {
         qDebug() << "Download failed:" << reply->errorString();
         emit error(tr("Download failed: %1").arg(reply->errorString()));
         outputFile.close();
         reply->deleteLater();
         return false;
     }
     
     // Write any remaining data
     outputFile.write(reply->readAll());
     outputFile.close();
     reply->deleteLater();
     
     qDebug() << "Download completed:" << downloadedBytes << "bytes";
     return true;
 }
 
 bool DfuThread::extractXzFile(const QString &xzFilePath, const QString &outputPath)
 {
     emit preparationStatusUpdate(tr("Extracting image from archive..."));
     qDebug() << "Extracting XZ file:" << xzFilePath << "to:" << outputPath;
     
     // Use QProcess to run xz command
     QProcess xzProcess;
     
     // Check if xz is available
     QProcess::execute("which", QStringList() << "xz");
     
     // Prepare xz command: xz -dc input.xz > output
     // Using -d (decompress), -c (stdout), -k (keep original)
     xzProcess.start("xz", QStringList() << "-dc" << xzFilePath);
     
     if (!xzProcess.waitForStarted())
     {
         qDebug() << "Failed to start xz process";
         emit error(tr("Failed to start decompression (xz not found?)"));
         return false;
     }
     
     // Open output file
     QFile outputFile(outputPath);
     if (!outputFile.open(QIODevice::WriteOnly))
     {
         qDebug() << "Failed to open output file:" << outputPath;
         xzProcess.kill();
         xzProcess.waitForFinished();
         return false;
     }
     
     qint64 totalWritten = 0;
     int lastProgress = 40;
     
     // Read decompressed data and write to file
     while (xzProcess.state() != QProcess::NotRunning || xzProcess.bytesAvailable() > 0)
     {
         if (xzProcess.waitForReadyRead(1000))
         {
             QByteArray data = xzProcess.readAll();
             qint64 written = outputFile.write(data);
             totalWritten += written;
             
             // Update progress (40-50% range)
             // Typical image is ~4GB decompressed
             int newProgress = 40 + (totalWritten * 10 / (4LL * 1024 * 1024 * 1024));
             if (newProgress > lastProgress && newProgress <= 50)
             {
                 lastProgress = newProgress;
                 emit progressUpdate(newProgress, 
                     tr("Extracted: %1 MB").arg(totalWritten / 1024 / 1024));
             }
         }
     }
     
     outputFile.close();
     
     // Wait for process to finish
     xzProcess.waitForFinished(-1);
     
     if (xzProcess.exitCode() != 0)
     {
         QString errorOutput = xzProcess.readAllStandardError();
         qDebug() << "xz extraction failed:" << errorOutput;
         emit error(tr("Decompression failed: %1").arg(errorOutput));
         QFile::remove(outputPath);
         return false;
     }
     
     qDebug() << "Extraction completed:" << totalWritten << "bytes";
     return true;
 }
 
 bool DfuThread::sendImageToRawemmc(const QString &imagePath)
 {
     // Send image file to rawemmc alt setting via DFU
     const int TI_VENDOR_ID = 0x0451;
     const int TI_PRODUCT_ID = 0x6165;
     const QString altSettingName = "rawemmc";
     
     emit preparationStatusUpdate(tr("Preparing to send image to device..."));
     
     // Create DFU wrapper
     DfuWrapper *dfu = new DfuWrapper(nullptr);
     
     if (!dfu->initialize()) {
         emit error(tr("Failed to initialize DFU for image transfer"));
         delete dfu;
         return false;
     }
     
     // Find device with rawemmc alt setting
     if (!dfu->findDevice(TI_VENDOR_ID, TI_PRODUCT_ID, altSettingName)) {
         emit error(tr("Failed to find rawemmc partition on device"));
         delete dfu;
         return false;
     }
     
     emit progressUpdate(80, tr("Sending image to device (this may take several minutes)..."));
     
     // Download image file and reset device to boot into u-boot
     if (!dfu->downloadFile(imagePath, altSettingName, true)) {
         emit error(tr("Failed to transfer image to device"));
         delete dfu;
         return false;
     }
     
     // Cleanup
     dfu->cleanup();
     delete dfu;
     
     return true;
 }
 