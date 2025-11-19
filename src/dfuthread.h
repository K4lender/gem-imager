/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#ifndef DFUTHREAD_H
#define DFUTHREAD_H

#include <QThread>
#include <QProcess>
#include <QString>
#include <QStringList>

class DfuThread : public QThread
{
    Q_OBJECT
public:
    explicit DfuThread(QObject *parent = nullptr);
    void setTestFilesPath(const QString &path);
    
signals:
    void success();
    void error(QString msg);
    void progressUpdate(int percentage, QString statusMsg);
    void preparationStatusUpdate(QString msg);

protected:
    void run() override;

private:
    QString _testFilesPath;
    QProcess *_process;
    
    bool checkDfuUtil();
    bool installDfuUtil();
    bool sendFile(const QString &filePath, const QString &altSettingName);
    bool waitForDfuDevice(int timeoutSeconds);
    void cleanupProcess();
};

#endif // DFUTHREAD_H
