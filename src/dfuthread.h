/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

 #ifndef DFUTHREAD_H
 #define DFUTHREAD_H
 
 #include <QThread>
 #include <QString>
 #include <QSettings>
 #include <QFile>
 
 class DfuThread : public QThread
 {
     Q_OBJECT
 public:
     explicit DfuThread(QObject *parent = nullptr);
     ~DfuThread();
     void setTestFilesPath(const QString &path);
     void setImageInfo(const QString &board, const QString &imageType, const QString &distro, const QString &variant);
     
 signals:
     void success();
     void error(QString msg);
     void progressUpdate(int percentage, QString statusMsg);
     void preparationStatusUpdate(QString msg);
     void downloadProgress(qint64 downloaded, qint64 total);
 
 protected:
     void run() override;
 
 private:
     QString _testFilesPath;
     QString _board;
     QString _imageType;  // minimal, kiosk, desktop
     QString _distro;     // debian, ubuntu, pardus
     QString _variant;
     QString _tempCompressedPath;  // Temp xz file path
     QString _tempExtractedPath;    // Temp img file path
     
     // Cache system (identical to SD card caching)
     QString _cacheFileName;
     QFile _cachefile;
     QByteArray _cachedFileHash;
     bool _cachingEnabled;
     
     void initializeCache();
     void setCacheFile(const QString &filename, qint64 filesize);
     void _writeCache(const char *buf, size_t len);
     void cleanupTempFiles();
     bool checkDfuUtil();
     bool installDfuUtil();
     bool downloadImage(const QString &url, const QString &outputPath);
     bool extractXzFile(const QString &xzFilePath, const QString &outputPath);
     bool sendImageToRawemmc(const QString &imagePath);
 };
 
 #endif // DFUTHREAD_H