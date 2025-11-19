/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2024 Raspberry Pi Ltd
 */

#include "dfuthread.h"
#include <QProcess>
#include <QFile>
#include <QDir>
#include <QDebug>
#include <QThread>
#include <QTextStream>

DfuThread::DfuThread(QObject *parent)
    : QThread(parent), _process(nullptr)
{
}

void DfuThread::setTestFilesPath(const QString &path)
{
    _testFilesPath = path;
}

void DfuThread::run()
{
    emit preparationStatusUpdate(tr("Checking dfu-util availability..."));
    
    // Check if dfu-util is installed
    if (!checkDfuUtil())
    {
        emit preparationStatusUpdate(tr("Installing dfu-util..."));
        if (!installDfuUtil())
        {
            emit error(tr("Failed to install dfu-util. Please install it manually."));
            return;
        }
        
        // Check again after installation
        if (!checkDfuUtil())
        {
            emit error(tr("dfu-util installation failed. Please install it manually using: sudo apt-get install dfu-util"));
            return;
        }
    }
    
    emit progressUpdate(10, tr("DFU utility found"));
    QThread::msleep(500);
    
    // List of files to send in order
    QStringList files;
    files << "tiboot3.bin" << "tispl.bin" << "u-boot.img";
    
    // For TI J7 devices, map files to their alt setting names
    // Based on dfu-util -l output
    QStringList altSettingNames;
    altSettingNames << "bootloader" << "tispl.bin" << "u-boot.img";
    
    // Verify all files exist
    for (const QString &file : files)
    {
        QString filePath = _testFilesPath + "/" + file;
        if (!QFile::exists(filePath))
        {
            emit error(tr("File not found: %1").arg(filePath));
            return;
        }
    }
    
    emit progressUpdate(15, tr("Creating DFU script..."));
    
    // Create a temporary script that will do all DFU operations
    QString scriptPath = QDir::temp().filePath("gem-imager-dfu.sh");
    QFile scriptFile(scriptPath);
    
    if (!scriptFile.open(QIODevice::WriteOnly | QIODevice::Text))
    {
        emit error(tr("Failed to create temporary script"));
        return;
    }
    
    QTextStream out(&scriptFile);
    out << "#!/bin/bash\n";
    out << "\n";
    out << "# Find dfu-util path\n";
    out << "DFU_UTIL=$(which dfu-util 2>/dev/null || echo '/usr/bin/dfu-util')\n";
    out << "\n";
    out << "# Debug: List USB devices\n";
    out << "echo 'Listing all USB devices...'\n";
    out << "lsusb 2>&1 || echo 'lsusb not found'\n";
    out << "\n";
    out << "# Debug: List DFU devices\n";
    out << "echo 'Searching for DFU devices...'\n";
    out << "\"$DFU_UTIL\" -l 2>&1 || echo 'dfu-util failed'\n";
    out << "\n";
    out << "# Check if DFU device is available\n";
    out << "if ! \"$DFU_UTIL\" -l 2>&1 | grep -q 'Found DFU\\|Device ID'; then\n";
    out << "  echo 'ERROR: No DFU device found.'\n";
    out << "  echo 'Please ensure:'\n";
    out << "  echo '1. Device is connected via USB'\n";
    out << "  echo '2. Device is in DFU mode (boot button pressed during power-on)'\n";
    out << "  echo '3. USB cable supports data transfer (not just charging)'\n";
    out << "  exit 1\n";
    out << "fi\n";
    out << "\n";
    
    for (int i = 0; i < files.size(); ++i)
    {
        QString filePath = _testFilesPath + "/" + files[i];
        out << "echo 'Sending " << files[i] << "...'\n";
        out << "\"$DFU_UTIL\" -R -a " << altSettingNames[i] << " -D " << filePath << " 2>&1 | tee /tmp/dfu-output.log\n";
        out << "# Check if download was successful (exit code 0 or 74, and 'Download done' in output)\n";
        out << "EXIT_CODE=${PIPESTATUS[0]}\n";
        out << "if grep -q 'Download done' /tmp/dfu-output.log; then\n";
        out << "  echo 'Transfer successful'\n";
        out << "elif [ $EXIT_CODE -ne 0 ]; then\n";
        out << "  echo 'Transfer failed with exit code '$EXIT_CODE\n";
        out << "  exit 1\n";
        out << "fi\n";
        out << "\n";
        
        // Wait for device to reconnect between files (except after last file)
        if (i < files.size() - 1)
        {
            out << "echo 'Waiting for device to reconnect...'\n";
            out << "sleep 2\n";
            
            // Wait for DFU device to reappear
            out << "for i in {1..20}; do\n";
            out << "  if \"$DFU_UTIL\" -l 2>/dev/null | grep -q 'Found DFU\\|Device ID'; then\n";
            out << "    echo 'Device reconnected'\n";
            out << "    sleep 1\n";
            out << "    break\n";
            out << "  fi\n";
            out << "  if [ $i -eq 20 ]; then\n";
            out << "    echo 'Device did not reconnect'\n";
            out << "    exit 1\n";
            out << "  fi\n";
            out << "  sleep 0.5\n";
            out << "done\n";
            out << "\n";
        }
    }
    
    out << "echo 'All files sent successfully'\n";
    scriptFile.close();
    
    // Make script executable
    QFile::setPermissions(scriptPath, QFile::ReadOwner | QFile::WriteOwner | QFile::ExeOwner);
    
    emit progressUpdate(20, tr("Requesting permissions for USB access..."));
    
    // Execute the script with pkexec (GUI password prompt)
    // Create QProcess in the thread it will be used in
    QProcess process;
    
    // Use pkexec for GUI password prompt
    QString command = "pkexec";
    QStringList arguments;
    arguments << "bash" << scriptPath;
    
    qDebug() << "Running:" << command << arguments.join(" ");
    
    int currentProgress = 20;
    
    connect(&process, &QProcess::readyReadStandardOutput, this, [&]() {
        QString output = process.readAllStandardOutput();
        QStringList lines = output.split('\n', Qt::SkipEmptyParts);
        
        for (const QString &line : lines)
        {
            qDebug() << "Script output:" << line;
            
            if (line.contains("Sending tiboot3.bin"))
            {
                currentProgress = 30;
                emit progressUpdate(30, tr("Sending tiboot3.bin..."));
            }
            else if (line.contains("Sending tispl.bin"))
            {
                currentProgress = 50;
                emit progressUpdate(50, tr("Sending tispl.bin..."));
            }
            else if (line.contains("Sending u-boot.img"))
            {
                currentProgress = 70;
                emit progressUpdate(70, tr("Sending u-boot.img..."));
            }
            else if (line.contains("Waiting for device"))
            {
                emit progressUpdate(currentProgress + 5, tr("Waiting for device to reconnect..."));
            }
            else if (line.contains("Device reconnected"))
            {
                currentProgress += 10;
                emit progressUpdate(currentProgress, tr("Device reconnected"));
            }
        }
    });
    
    process.start(command, arguments);
    
    if (!process.waitForStarted(5000))
    {
        emit error(tr("Failed to start DFU process"));
        scriptFile.remove();
        return;
    }
    
    // Wait for the process to finish (max 120 seconds for all files)
    if (!process.waitForFinished(120000))
    {
        emit error(tr("DFU process timed out"));
        process.kill();
        scriptFile.remove();
        return;
    }
    
    int exitCode = process.exitCode();
    QString output = process.readAllStandardOutput();
    QString errorOutput = process.readAllStandardError();
    
    qDebug() << "Script exit code:" << exitCode;
    qDebug() << "Output:" << output;
    qDebug() << "Error output:" << errorOutput;
    
    // Clean up
    scriptFile.remove();
    
    if (exitCode == 0)
    {
        emit progressUpdate(100, tr("All files sent successfully. Device should boot now."));
        QThread::msleep(1000);
        emit success();
    }
    else
    {
        emit error(tr("DFU operation failed. Exit code: %1. Check console for details.").arg(exitCode));
    }
}

bool DfuThread::checkDfuUtil()
{
    QProcess process;
    process.start("which", QStringList() << "dfu-util");
    process.waitForFinished(3000);
    
    return process.exitCode() == 0;
}

bool DfuThread::installDfuUtil()
{
    // Try to install dfu-util using apt-get (for Debian/Ubuntu based systems)
    QProcess process;
    
    emit preparationStatusUpdate(tr("Installing dfu-util (this may take a moment)..."));
    
    // First, try with pkexec for GUI authentication
    process.start("pkexec", QStringList() << "apt-get" << "install" << "-y" << "dfu-util");
    process.waitForFinished(60000); // Wait up to 60 seconds
    
    if (process.exitCode() == 0)
    {
        return true;
    }
    
    // If pkexec failed, try with sudo
    process.start("sudo", QStringList() << "apt-get" << "install" << "-y" << "dfu-util");
    process.waitForFinished(60000);
    
    return process.exitCode() == 0;
}

bool DfuThread::sendFile(const QString &filePath, const QString &altSettingName)
{
    _process = new QProcess(this);
    
    QStringList arguments;
    
    // Check if we can use pkexec (for GUI), otherwise try sudo
    QString command;
    QProcess testProcess;
    testProcess.start("which", QStringList() << "pkexec");
    testProcess.waitForFinished(1000);
    
    if (testProcess.exitCode() == 0)
    {
        // Use pkexec for GUI elevation
        command = "pkexec";
        arguments << "dfu-util";
    }
    else
    {
        // Fallback to sudo
        command = "sudo";
        arguments << "dfu-util";
    }
    
    arguments << "-R";  // Reset device after download
    arguments << "-a" << altSettingName;
    arguments << "-D" << filePath;
    
    qDebug() << "Running:" << command << arguments.join(" ");
    
    _process->start(command, arguments);
    
    if (!_process->waitForStarted(5000))
    {
        qDebug() << "Failed to start dfu-util";
        cleanupProcess();
        return false;
    }
    
    // Wait for the process to finish (max 30 seconds per file)
    if (!_process->waitForFinished(30000))
    {
        qDebug() << "dfu-util timed out";
        _process->kill();
        cleanupProcess();
        return false;
    }
    
    int exitCode = _process->exitCode();
    QString output = _process->readAllStandardOutput();
    QString errorOutput = _process->readAllStandardError();
    
    qDebug() << "dfu-util exit code:" << exitCode;
    qDebug() << "Output:" << output;
    qDebug() << "Error output:" << errorOutput;
    
    cleanupProcess();
    
    // Check if download was successful by looking at the output
    // Exit code 0 = perfect success
    // Exit code 74 (LIBUSB_ERROR_IO) = transfer completed but device disconnected (normal for bootloader)
    bool downloadComplete = output.contains("Download done.") || output.contains("Download\t[=========================] 100%");
    
    if (exitCode == 0 || (exitCode == 74 && downloadComplete))
    {
        return true;
    }
    
    return false;
}

bool DfuThread::waitForDfuDevice(int timeoutSeconds)
{
    // Determine whether to use pkexec or sudo
    QString command;
    QProcess testProcess;
    testProcess.start("which", QStringList() << "pkexec");
    testProcess.waitForFinished(1000);
    
    if (testProcess.exitCode() == 0)
    {
        command = "pkexec";
    }
    else
    {
        command = "sudo";
    }
    
    // Wait for device to reconnect in DFU mode
    for (int i = 0; i < timeoutSeconds * 2; ++i) // Check every 500ms
    {
        QProcess checkProcess;
        QStringList args;
        args << "dfu-util" << "-l";
        checkProcess.start(command, args);
        checkProcess.waitForFinished(2000);
        
        QString output = checkProcess.readAllStandardOutput();
        
        // Check if a DFU device is found
        if (output.contains("Found DFU") || output.contains("Device ID"))
        {
            return true;
        }
        
        QThread::msleep(500);
    }
    
    return false;
}

void DfuThread::cleanupProcess()
{
    if (_process)
    {
        _process->deleteLater();
        _process = nullptr;
    }
}
