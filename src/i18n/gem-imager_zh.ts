<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>DfuThread</name>
    <message>
        <location filename="../dfuthread.cpp" line="49"/>
        <source>Failed to create temporary file for DFU image</source>
        <translation>无法为 DFU 映像创建临时文件</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="59"/>
        <source>Failed to open temporary file for DFU image</source>
        <translation>无法打开 DFU 映像的临时文件</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="68"/>
        <source>Initializing DFU...</source>
        <translation>正在初始化 DFU...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="71"/>
        <source>DFU mode requires an image URL</source>
        <translation>DFU模式需要图像URL</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="75"/>
        <source>Downloading image...</source>
        <translation>正在下载图像...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="81"/>
        <source>Customizing image...</source>
        <translation>正在定制图像...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="85"/>
        <source>Failed to reopen image for customization: %1</source>
        <translation>无法重新打开图像进行自定义：%1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="92"/>
        <source>Extracting bootloader files from image...</source>
        <translation>正在从映像中提取引导加载程序文件...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="95"/>
        <source>Sending bootloader files...</source>
        <translation>正在发送引导加载程序文件...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="98"/>
        <source>Waiting for device to enter DFU mode...</source>
        <translation>正在等待设备进入 DFU 模式...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="101"/>
        <source>Sending image to device (this may take several minutes)...</source>
        <translation>正在将图像发送到设备（这可能需要几分钟）...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="104"/>
        <source>Writing boot binaries to eMMC (do not power off)...</source>
        <translation>将启动二进制文件写入 eMMC（不要关闭电源）...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="107"/>
        <source>System image sent successfully!</source>
        <translation>系统镜像发送成功！</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="123"/>
        <source>DFU failed (alt: %1): %2</source>
        <translation>DFU 失败（替代：%1）：%2</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="139"/>
        <source>Sending %1...</source>
        <translation>正在发送 %1...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="142"/>
        <source>%1 sent</source>
        <translation>%1 已发送</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="145"/>
        <source>Waiting for device to reconnect...</source>
        <translation>正在等待设备重新连接...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="162"/>
        <source>Failed to reopen image file: %1</source>
        <translation>无法重新打开图像文件：%1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="174"/>
        <source>Bootloader file not found in image: %1</source>
        <translation>在映像中找不到引导加载程序文件：%1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="185"/>
        <source>Failed to create temp file for %1</source>
        <translation>无法为 %1 创建临时文件</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="190"/>
        <source>Failed to write temp file for %1</source>
        <translation>无法为 %1 写入临时文件</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="199"/>
        <source>Error reading bootloader files from image: %1</source>
        <translation>从映像读取引导加载程序文件时出错：%1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="209"/>
        <source>Image not found: %1</source>
        <translation>未找到图片：%1</translation>
    </message>
</context>
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="206"/>
        <location filename="../downloadextractthread.cpp" line="400"/>
        <source>Error extracting archive: %1</source>
        <translation>解压至 %1 时发生错误</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="271"/>
        <source>Error mounting FAT32 partition</source>
        <translation>挂载 FAT32 分区时发生错误</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="291"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>操作系统未能挂载 FAT32 分区</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="314"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>进入文件夹 “%1” 时发生错误</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="119"/>
        <source>unmounting drive</source>
        <translation>卸载存储设备</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="139"/>
        <source>opening drive</source>
        <translation>打开存储设备</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="167"/>
        <source>Error running diskpart: %1</source>
        <translation>运行 “diskpart” 命令时发生错误：%1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="188"/>
        <source>Error removing existing partitions</source>
        <translation>删除现有分区时发生错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="214"/>
        <source>Authentication cancelled</source>
        <translation>验证已取消</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>在运行 authopen 以获取对磁盘设备 “%1” 的访问权限时发生错误</translation>
    </message>
    <message>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation type="vanished">请检查，在隐私设置中是否允许树莓派启动盘制作工具（Raspberry Pi Imager）访问“可移除的宗卷”（位于“文件和文件夹”下），或为其授予“完全磁盘访问权限”。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="218"/>
        <source>Please verify if &apos;Gemstone Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>请在隐私设置中确认“Gemstone Imager”是否允许访问“可移动卷”（在“文件和文件夹”下，或授予“完整磁盘访问权限”）。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="240"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>无法打开存储设备 “%1”。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="282"/>
        <source>discarding existing data on drive</source>
        <translation>清除存储设备上的已有数据</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>将存储设备的首尾 1 M 清零</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="310"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>清零 MBR 时写入错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="322"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>在对设备尾部清零时写入错误&lt;br&gt;SD 卡标称的容量错误（可能是扩容卡）。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="412"/>
        <source>starting download</source>
        <translation>开始下载</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="472"/>
        <source>Error downloading: %1</source>
        <translation>下载错误，已下载：%1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="669"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>将文件写入磁盘时被拒绝访问。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="674"/>
        <source>Controlled Folder Access seems to be enabled. Please add both gem-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>似乎已启用受控文件夹访问权限。 请将 gem-imager.exe 和 fat32format.exe 添加至允许的应用程序列表中，然后重试。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="681"/>
        <source>Error writing file to disk</source>
        <translation>将文件写入磁盘时发生错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="703"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>下载的文件已损坏。校验值不匹配</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="715"/>
        <location filename="../downloadthread.cpp" line="767"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>写入存储设备时发生错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="722"/>
        <location filename="../downloadthread.cpp" line="774"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>在写入存储设备时（fsync）发生错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing first block (partition table)</source>
        <translation>在写入第一个区块（分区表）时发生错误</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="834"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>读取存储设备时发生错误。&lt;br&gt;SD 卡可能已损坏。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="853"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>写入校验失败。SD 卡与写入的内容不一致。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="908"/>
        <source>Customizing image</source>
        <translation>使用自定义镜像</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>分区时发生错误：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>fat32format 执行错误</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>运行 fat32format 时发生错误：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>确定新驱动器号时发生错误</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>无效的设备：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>格式化时发生错误</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>sfdisk 执行时发生错误</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>分区操作未能按预期创建 FAT 分区 %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>执行 mkfs.fat 时发生错误</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>运行 mkfs.fat 时发生错误：%1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>暂不支持在该平台上进行格式化</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="313"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>存储容量不足。&lt;br&gt;至少需要 %1 GB 的剩余空间.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="319"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>所选文件是无效的磁盘镜像。&lt;br&gt;文件大小 %1 B 不是 512 B 的整倍数。</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="777"/>
        <source>Downloading and writing image</source>
        <translation>下载和写入镜像</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="939"/>
        <source>DFU mode not selected</source>
        <translation>未选择DFU模式</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="967"/>
        <source>Authentication failed or was cancelled.&lt;br&gt;DFU operation requires elevated privileges to access the USB device.</source>
        <translation>身份验证失败或已取消。&lt;br&gt;DFU操作需要提升的权限才能访问 USB设备。</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1047"/>
        <source>Select image</source>
        <translation>选择镜像</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1222"/>
        <source>Error synchronizing time. Trying again in 3 seconds</source>
        <translation>时间同步错误。将在 3 秒后重试</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1234"/>
        <source>STP is enabled on your Ethernet switch. Getting IP will take long time.</source>
        <translation>您的以太网交换机启用了 STP。获取 IP 地址可能需要较长时间。</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1486"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>您想要通过系统钥匙串访问自动填充 WiFi 密码吗？</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>打开镜像文件</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>读取镜像文件时发生错误</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="121"/>
        <source>NO</source>
        <translation>否</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>YES</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="139"/>
        <source>CONTINUE</source>
        <translation>继续</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="147"/>
        <source>QUIT</source>
        <translation>退出</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="27"/>
        <source>OS Customization</source>
        <translation>自定义系统配置</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="61"/>
        <source>General</source>
        <translation>通用</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="70"/>
        <source>Services</source>
        <translation>服务</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="76"/>
        <source>Options</source>
        <translation>可选配置</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="110"/>
        <source>Set hostname:</source>
        <translation>设置主机名：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="139"/>
        <source>Set username and password</source>
        <translation>设置用户名及密码</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="153"/>
        <source>Username:</source>
        <translation>用户名：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="179"/>
        <source>Password is required!</source>
        <translation>需要密码！</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="187"/>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Password:</source>
        <translation>密码：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="228"/>
        <source>Configure wireless LAN</source>
        <translation>配置 WLAN</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="242"/>
        <source>SSID:</source>
        <translation>网络名称：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="293"/>
        <source>Show password</source>
        <translation>显示密码</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="304"/>
        <source>Hidden SSID</source>
        <translation>隐藏的网络</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="315"/>
        <source>Wireless LAN country:</source>
        <translation>WLAN 区域：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>Set locale settings</source>
        <translation>本地化设置</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="337"/>
        <source>Time zone:</source>
        <translation>时区：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="356"/>
        <source>Keyboard layout:</source>
        <translation>键盘布局：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Set Disk Encryption (Cryptsetup)</source>
        <translation>设置磁盘加密（Cryptsetup）</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="385"/>
        <source>Disk Password:</source>
        <translation>磁盘密码：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="426"/>
        <source>Write sdcard&apos;s image to eMMC on first boot</source>
        <translation>首次启动时将SD卡镜像写入eMMC</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="451"/>
        <source>Enable SSH</source>
        <translation>开启 SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="467"/>
        <source>Use password authentication</source>
        <translation>使用密码登录</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="478"/>
        <source>Allow public-key authentication only</source>
        <translation>仅使用公钥登录</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="489"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>为用户 “%1” 设置 authorized_keys：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="533"/>
        <source>Delete Key</source>
        <translation>删除密钥</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="552"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>运行 SSH-KEYGEN</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="562"/>
        <source>Add SSH Key</source>
        <translation>添加SSH密钥</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="578"/>
        <source>Enable VNC</source>
        <translation>启用VNC</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="583"/>
        <source>VNC Password is required!</source>
        <translation>需要VNC密码！</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="591"/>
        <source>VNC Password:</source>
        <translation>VNC密码：</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="610"/>
        <source>Gadgets</source>
        <translation>小工具</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="616"/>
        <source>Enable Storage Gadget</source>
        <translation>启用存储小工具</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="622"/>
        <source>Enable Ethernet Gadget</source>
        <translation>启用以太网小工具</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="628"/>
        <source>Enable Serial Gadgets</source>
        <translation>启用串行小工具</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="653"/>
        <source>Play sound when finished</source>
        <translation>在完成后播放提示音</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="657"/>
        <source>Eject media when finished</source>
        <translation>在完成后卸载磁盘</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="676"/>
        <source>Serial Port </source>
        <translation>串行端口 </translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="708"/>
        <source>Ethernet </source>
        <translation>以太网 </translation>
    </message>
    <message>
        <source>Enable telemetry</source>
        <translation type="vanished">启用遥测</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="752"/>
        <source>SAVE</source>
        <translation>保存</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="126"/>
        <source>Internal SD card reader</source>
        <translation>内置 SD 卡读卡器</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="46"/>
        <source>Use OS customization?</source>
        <translation>使用自定义系统配置？</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="98"/>
        <source>Would you like to apply OS customization settings?</source>
        <translation>您想应用自定义系统配置吗？</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="139"/>
        <source>NO</source>
        <translation>否</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="120"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>否，并清空所有设置</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="130"/>
        <source>YES</source>
        <translation>确认</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>EDIT SETTINGS</source>
        <translation>编辑设置</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Raspberry Pi Imager v%1</source>
        <translation type="vanished">树莓派启动盘制作工具 v%1</translation>
    </message>
    <message>
        <source>Raspberry Pi Device</source>
        <translation type="vanished">树莓派设备</translation>
    </message>
    <message>
        <location filename="../main.qml" line="134"/>
        <source>CHOOSE DEVICE</source>
        <translation>选择设备</translation>
    </message>
    <message>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation type="vanished">点击此处选择您的树莓派型号</translation>
    </message>
    <message>
        <location filename="../main.qml" line="160"/>
        <location filename="../main.qml" line="555"/>
        <source>Operating System</source>
        <translation>操作系统</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <location filename="../main.qml" line="1977"/>
        <source>CHOOSE OS</source>
        <translation>选择操作系统</translation>
    </message>
    <message>
        <location filename="../main.qml" line="183"/>
        <source>Select this button to change the operating system</source>
        <translation>点击此处更改操作系统</translation>
    </message>
    <message>
        <location filename="../main.qml" line="197"/>
        <location filename="../main.qml" line="957"/>
        <source>Storage</source>
        <translation>储存设备</translation>
    </message>
    <message>
        <location filename="../main.qml" line="330"/>
        <source>Network not ready yet</source>
        <translation>网络不可用</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1022"/>
        <source>No storage devices found</source>
        <translation>找不到存储设备</translation>
    </message>
    <message>
        <location filename="../main.qml" line="208"/>
        <location filename="../main.qml" line="1643"/>
        <source>CHOOSE STORAGE</source>
        <translation>选择储存设备</translation>
    </message>
    <message>
        <location filename="../main.qml" line="24"/>
        <source>Gemstone Image Writer %1</source>
        <translation>Gemstone Image Writer %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="122"/>
        <location filename="../main.qml" line="453"/>
        <source>Gemstone Board</source>
        <translation>Gemstone开发板</translation>
    </message>
    <message>
        <location filename="../main.qml" line="146"/>
        <source>Select this button to choose your target Gemstone Board</source>
        <translation>选择此按钮以选择目标Gemstone开发板</translation>
    </message>
    <message>
        <location filename="../main.qml" line="222"/>
        <source>Select this button to change the destination storage device</source>
        <translation>点击此处更改所选存储设备</translation>
    </message>
    <message>
        <location filename="../main.qml" line="267"/>
        <source>CANCEL WRITE</source>
        <translation>取消写入</translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <location filename="../main.qml" line="1527"/>
        <location filename="../main.qml" line="1538"/>
        <source>Cancelling...</source>
        <translation>正在取消……</translation>
    </message>
    <message>
        <location filename="../main.qml" line="282"/>
        <source>CANCEL VERIFY</source>
        <translation>取消校验</translation>
    </message>
    <message>
        <location filename="../main.qml" line="285"/>
        <location filename="../main.qml" line="1561"/>
        <location filename="../main.qml" line="1670"/>
        <source>Finalizing...</source>
        <translation>正在完成...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <source>Next</source>
        <translation>下一步</translation>
    </message>
    <message>
        <location filename="../main.qml" line="300"/>
        <source>Select this button to start writing the image</source>
        <translation>点击此处开始写入</translation>
    </message>
    <message>
        <location filename="../main.qml" line="320"/>
        <source>Using custom repository: %1</source>
        <translation>使用自定义存储库（repository）：%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="339"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>键盘导航：&lt;tab&gt; 切换选项 &lt;space&gt; 确认/选择后使用 &lt;arrow up/down&gt; 可在列表中上下移动</translation>
    </message>
    <message>
        <location filename="../main.qml" line="360"/>
        <source>Language: </source>
        <translation>语言：</translation>
    </message>
    <message>
        <location filename="../main.qml" line="383"/>
        <source>Keyboard: </source>
        <translation>键盘：</translation>
    </message>
    <message>
        <location filename="../main.qml" line="497"/>
        <source>[ All ]</source>
        <translation>[ All ]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="653"/>
        <source>Back</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="../main.qml" line="654"/>
        <source>Go back to main menu</source>
        <translation>回到主菜单</translation>
    </message>
    <message>
        <location filename="../main.qml" line="900"/>
        <source>Released: %1</source>
        <translation>发布时间：%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="910"/>
        <source>Cached on your computer</source>
        <translation>已缓存到本地磁盘</translation>
    </message>
    <message>
        <location filename="../main.qml" line="912"/>
        <source>Local file</source>
        <translation>本地文件</translation>
    </message>
    <message>
        <location filename="../main.qml" line="913"/>
        <source>Online - %1 GB download</source>
        <translation>需要下载：%1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1057"/>
        <source>Exclude System Drives</source>
        <translation>排除系统驱动器</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1115"/>
        <source>Internal eMMC - 32 GB</source>
        <translation>内置eMMC - 32 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1125"/>
        <source>Writes the image to the card&apos;s internal eMMC memory via Uniflash</source>
        <translation>通过Uniflash将镜像写入卡的内置eMMC内存</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1213"/>
        <location filename="../main.qml" line="2140"/>
        <source>DFU Mode</source>
        <translation>DFU模式</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1223"/>
        <source>Program the device via USB DFU (Device Firmware Update)</source>
        <translation>通过USB DFU（设备固件更新）对设备进行编程</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1268"/>
        <source>gigabytes</source>
        <translation>GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1270"/>
        <location filename="../main.qml" line="1332"/>
        <source>Mounted as %1</source>
        <translation>已挂载为：%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1318"/>
        <source>GB</source>
        <translation>GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1334"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[写保护]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1336"/>
        <source>SYSTEM</source>
        <translation>系统</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1394"/>
        <location filename="../main.qml" line="1401"/>
        <source>Boot Mode Switch</source>
        <translation>启动模式开关</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1395"/>
        <source>Configure the boot mode switches for DFU Boot as shown in the image.</source>
        <translation>如图所示，配置DFU启动的启动模式开关。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1402"/>
        <source>DFU programming completed successfully!&lt;br&gt;&lt;br&gt;After powering off the card, set the boot mode switches to eMMC Boot as shown in the image. Upon restoring power, the system will boot automatically.</source>
        <translation>DFU编程成功完成！&lt;br&gt;&lt;br&gt;关闭卡的电源后，如图所示将启动模式开关设置为eMMC启动。恢复电源后，系统将自动启动。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1411"/>
        <source>Are you sure you want to quit?</source>
        <translation>您确定要退出吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1412"/>
        <source>Gemstone Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Gemstone Imager仍在忙碌中。&lt;br&gt;您确定要退出吗？</translation>
    </message>
    <message>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation type="vanished">树莓派启动盘制作工具还未完成任务。&lt;br&gt;您确定要退出吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1423"/>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1442"/>
        <location filename="../main.qml" line="2152"/>
        <source>Starting DFU operation...</source>
        <translation>正在启动DFU操作...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1448"/>
        <source>Preparing to write...</source>
        <translation>准备写入……</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1457"/>
        <source>Image will be sent to device via DFU.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>镜像将通过DFU发送到设备。&lt;br&gt;您确定要继续吗？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1459"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>&apos;%1&apos; 上的已有数据都将被删除。&lt;br&gt;是否继续？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1475"/>
        <source>Update available</source>
        <translation>检测到更新</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1476"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>检测到新版树莓派启动盘制作工具。&lt;br&gt; 是否转到网页进行下载？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1530"/>
        <source>Downloading... %1%</source>
        <translation>正在下载…… %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1541"/>
        <source>Sending... %1%</source>
        <translation>发送中... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1564"/>
        <source>Verifying... %1%</source>
        <translation>正在校验…… %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1571"/>
        <source>Preparing to write... (%1)</source>
        <translation>准备写入…… (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1582"/>
        <source>Waiting for authentication to access USB device...</source>
        <translation>正在等待身份验证以访问USB设备...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1605"/>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1612"/>
        <source>Write Successful</source>
        <translation>写入成功</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1613"/>
        <location filename="../imagewriter.cpp" line="719"/>
        <source>Erase</source>
        <translation>格式化</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1614"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1 &lt;/ b&gt; 已成功格式化&lt;br&gt; &lt;br&gt;您现在可以从读卡器上取下 SD 卡了</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1629"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;The process is complete. You can connect to the board via the serial port.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt;已写入&lt;b&gt;%2&lt;/b&gt;。&lt;br&gt;&lt;br&gt;过程已完成。您可以通过串行端口连接到开发板。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1633"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; 已成功写入至 &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;，您现在可以从读卡器上取下 SD 卡了</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1798"/>
        <source>Error parsing os_list.json</source>
        <translation>os_list.json 解析错误</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="720"/>
        <source>Format card as FAT32</source>
        <translation>把 SD 卡格式化为 FAT32</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="726"/>
        <source>Use custom</source>
        <translation>使用自定义镜像</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="727"/>
        <source>Select a custom .img from your computer</source>
        <translation>选择本地已有的 .img 文件</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2051"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>请先接入一款包含镜像的 USB 设备。&lt;br&gt;其镜像必须位于该设备的根路径下。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2129"/>
        <source>Onboard emmc</source>
        <translation>板载eMMC</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2165"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>SD 卡写保护。&lt;br&gt;请尝试向上推动 SD 卡左侧的锁定开关，然后再试一次。</translation>
    </message>
</context>
</TS>
