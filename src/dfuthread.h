/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

 #ifndef DFUTHREAD_H
 #define DFUTHREAD_H
 
 #include <QThread>
 #include <QString>
 
 class DfuThread : public QThread
 {
     Q_OBJECT
 public:
     explicit DfuThread(QObject *parent = nullptr);
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
     
     bool checkDfuUtil();
     bool installDfuUtil();
     bool downloadImage(const QString &url, const QString &outputPath);
     bool extractXzFile(const QString &xzFilePath, const QString &outputPath);
     bool sendImageToRawemmc(const QString &imagePath);
 };
 
 #endif // DFUTHREAD_H