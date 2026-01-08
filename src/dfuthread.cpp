/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

 #include "dfuthread.h"
 #include "dfuwrapper.h"
 #include "config.h"
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
 #include <QCryptographicHash>
 #include <QStorageInfo>
 #include <lzma.h>
 
 #ifdef Q_OS_LINUX
 #include <unistd.h>  // For geteuid()
 #endif
 
 DfuThread::DfuThread(QObject *parent)
     : QThread(parent), _cachingEnabled(false)
 {
     initializeCache();
 }
 
 DfuThread::~DfuThread()
 {
     cleanupTempFiles();
     if (_cachefile.isOpen())
         _cachefile.close();
 }
 
 void DfuThread::initializeCache()
 {
     QSettings settings;
     settings.beginGroup("dfu-caching");
     _cachingEnabled = settings.value("enabled", IMAGEWRITER_ENABLE_CACHE_DEFAULT).toBool();
     _cachedFileHash = settings.value("lastDownloadSHA256").toByteArray();
     _cacheFileName = QStandardPaths::writableLocation(QStandardPaths::CacheLocation)+QDir::separator()+"lastdfudownload.cache";
     
     if (!_cachedFileHash.isEmpty())
     {
         QFileInfo f(_cacheFileName);
         if (!f.exists() || !f.isReadable() || !f.size())
         {
             _cachedFileHash.clear();
             settings.remove("lastDownloadSHA256");
             settings.sync();
         }
     }
     settings.endGroup();
     
     qDebug() << "DFU cache file:" << _cacheFileName;
     qDebug() << "DFU caching enabled:" << _cachingEnabled;
 }
 
 void DfuThread::setCacheFile(const QString &filename, qint64 filesize)
 {
     _cachefile.setFileName(filename);
     if (_cachefile.open(QIODevice::WriteOnly))
     {
         _cachingEnabled = true;
         if (filesize)
         {
             /* Pre-allocate space */
             _cachefile.resize(filesize);
         }
     }
     else
     {
         qDebug() << "Error opening DFU cache file for writing. Disabling caching.";
     }
 }
 
 void DfuThread::_writeCache(const char *buf, size_t len)
 {
     if (!_cachingEnabled || !_cachefile.isOpen())
         return;
 
     if (_cachefile.write(buf, len) != len)
     {
         qDebug() << "Error writing to DFU cache file. Disabling caching.";
         _cachingEnabled = false;
         _cachefile.remove();
     }
 }
 
 void DfuThread::cleanupTempFiles()
 {
     // Clean up extracted IMG file
     if (!_tempExtractedPath.isEmpty() && QFile::exists(_tempExtractedPath))
     {
         qDebug() << "Removing temp extracted file:" << _tempExtractedPath;
         QFile::remove(_tempExtractedPath);
     }
     
     // Clean up compressed file if not cached
     if (!_tempCompressedPath.isEmpty() && _tempCompressedPath != _cacheFileName && QFile::exists(_tempCompressedPath))
     {
         qDebug() << "Removing temp compressed file:" << _tempCompressedPath;
         QFile::remove(_tempCompressedPath);
     }
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
         
         // Generate expected hash for cache validation
         QByteArray expectedHash = QCryptographicHash::hash(filename.toUtf8(), QCryptographicHash::Sha256);
         
         // Check if file is already cached
         bool useCached = false;
         if (_cachingEnabled && !_cachedFileHash.isEmpty() && _cachedFileHash == expectedHash)
         {
             QFileInfo f(_cacheFileName);
             if (f.exists() && f.isReadable() && f.size())
             {
                 useCached = true;
                 qDebug() << "Using cached DFU image";
                 emit progressUpdate(40, tr("Using cached image file"));
                 _tempCompressedPath = _cacheFileName;
             }
         }
         
         if (!useCached)
         {
             // DFU sends image directly to device, use cache if enabled
             if (_cachingEnabled)
             {
                 _tempCompressedPath = _cacheFileName;
                 qDebug() << "Downloading to cache:" << _tempCompressedPath;
                 
                 // Setup cache file for writing
                 QSettings settings;
                 if (settings.isWritable() && QFile::exists(_cacheFileName))
                 {
                     QFile::remove(_cacheFileName);
                 }
             }
             else
             {
                 // Use temp directory if caching is disabled
                 QString tempDir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);
                 QString gemTempDir = tempDir + "/gem-imager";
                 QDir().mkpath(gemTempDir);
                 _tempCompressedPath = gemTempDir + "/" + filename;
                 qDebug() << "Caching disabled. Using temp directory:" << _tempCompressedPath;
             }
             
             // Download image (5-40% progress)
             if (!downloadImage(imageUrl, _tempCompressedPath))
             {
                 emit error(tr("Failed to download system image from: %1").arg(imageUrl));
                 if (_cachingEnabled && _cachefile.isOpen())
                     _cachefile.remove();
                 return;
             }
             
             // Update cache hash after successful download
             if (_cachingEnabled)
             {
                 QSettings settings;
                 settings.beginGroup("dfu-caching");
                 settings.setValue("lastDownloadSHA256", expectedHash);
                 settings.sync();
                 settings.endGroup();
                 _cachedFileHash = expectedHash;
                 qDebug() << "DFU cache hash updated:" << expectedHash.toHex();
             }
         }
         
         emit progressUpdate(40, tr("Extracting image from archive..."));
         
         // Extract .xz file to temp directory
         QString tempDir = QStandardPaths::writableLocation(QStandardPaths::TempLocation);
         QString gemTempDir = tempDir + "/gem-imager";
         QDir().mkpath(gemTempDir);
         
         _tempExtractedPath = gemTempDir + "/" + filename.replace(".img.xz", ".img");
         extractedImagePath = _tempExtractedPath;
         if (!extractXzFile(_tempCompressedPath, _tempExtractedPath))
         {
             emit error(tr("Failed to extract image from archive"));
             // Only remove if not cached
             if (_tempCompressedPath != _cacheFileName)
             {
                 QFile::remove(_tempCompressedPath);
             }
             return;
         }
         
         // Remove compressed file only if it's NOT in cache
         if (_tempCompressedPath != _cacheFileName)
         {
             qDebug() << "Removing non-cached compressed file";
             QFile::remove(_tempCompressedPath);
         }
         else
         {
             qDebug() << "Keeping cached compressed file:" << _cacheFileName;
         }
         
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
     connect(reply, &QNetworkReply::readyRead, [&, this]() {
         QByteArray data = reply->readAll();
         outputFile.write(data);
         // Write to cache if enabled
         if (_cachingEnabled && _cachefile.isOpen())
         {
             _writeCache(data.constData(), data.size());
         }
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
     
     QFile inputFile(xzFilePath);
     QFile outputFile(outputPath);
     
     if (!inputFile.open(QIODevice::ReadOnly))
     {
         emit error(tr("Failed to open compressed file"));
         return false;
     }
     
     if (!outputFile.open(QIODevice::WriteOnly))
     {
         emit error(tr("Failed to create output file"));
         return false;
     }
     
     lzma_stream strm = LZMA_STREAM_INIT;
     if (lzma_stream_decoder(&strm, UINT64_MAX, LZMA_CONCATENATED) != LZMA_OK)
     {
         emit error(tr("Failed to initialize decompressor"));
         return false;
     }
     
     constexpr size_t BUFFER_SIZE = 65536;
     uint8_t inbuf[BUFFER_SIZE];
     uint8_t outbuf[BUFFER_SIZE];
     
     strm.next_in = nullptr;
     strm.avail_in = 0;
     strm.next_out = outbuf;
     strm.avail_out = BUFFER_SIZE;
     
     lzma_action action = LZMA_RUN;
     qint64 totalWritten = 0;
     int lastProgress = 40;
     bool success = true;
     
     while (true)
     {
         if (strm.avail_in == 0 && !inputFile.atEnd())
         {
             qint64 bytesRead = inputFile.read((char*)inbuf, BUFFER_SIZE);
             if (bytesRead < 0)
             {
                 emit error(tr("Error reading compressed file"));
                 success = false;
                 break;
             }
             
             strm.next_in = inbuf;
             strm.avail_in = bytesRead;
             if (inputFile.atEnd()) action = LZMA_FINISH;
         }
         
         lzma_ret ret = lzma_code(&strm, action);
         
         if (strm.avail_out == 0 || ret == LZMA_STREAM_END)
         {
             size_t writeSize = BUFFER_SIZE - strm.avail_out;
             if (outputFile.write((char*)outbuf, writeSize) != (qint64)writeSize)
             {
                 emit error(tr("Error writing decompressed data"));
                 success = false;
                 break;
             }
             
             totalWritten += writeSize;
             int newProgress = 40 + qMin(10, (int)(totalWritten * 10 / (4LL * 1024 * 1024 * 1024)));
             if (newProgress > lastProgress)
             {
                 lastProgress = newProgress;
                 emit progressUpdate(newProgress, tr("Extracted: %1 MB").arg(totalWritten / 1024 / 1024));
             }
             
             strm.next_out = outbuf;
             strm.avail_out = BUFFER_SIZE;
         }
         
         if (ret == LZMA_STREAM_END) break;
         
         if (ret != LZMA_OK)
         {
             const char* msg = (ret == LZMA_MEM_ERROR) ? "Memory error" :
                              (ret == LZMA_FORMAT_ERROR) ? "Invalid format" :
                              (ret == LZMA_DATA_ERROR) ? "Corrupt data" : "Decompression error";
             emit error(tr("Decompression failed: %1").arg(msg));
             success = false;
             break;
         }
     }
     
     lzma_end(&strm);
     inputFile.close();
     outputFile.close();
     
     if (!success)
     {
         QFile::remove(outputPath);
         return false;
     }
     
     qDebug() << "Extracted" << totalWritten << "bytes successfully";
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
 