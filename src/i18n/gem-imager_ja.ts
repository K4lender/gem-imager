<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja_JP">
<context>
    <name>DfuThread</name>
    <message>
        <location filename="../dfuthread.cpp" line="49"/>
        <source>Failed to create temporary file for DFU image</source>
        <translation>DFU イメージの一時ファイルの作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="59"/>
        <source>Failed to open temporary file for DFU image</source>
        <translation>DFU イメージの一時ファイルを開けませんでした</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="68"/>
        <source>Initializing DFU...</source>
        <translation>DFU を初期化しています...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="71"/>
        <source>DFU mode requires an image URL</source>
        <translation>DFU モードには画像 URL が必要です</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="75"/>
        <source>Downloading image...</source>
        <translation>画像をダウンロード中...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="81"/>
        <source>Customizing image...</source>
        <translation>画像をカスタマイズしています...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="85"/>
        <source>Failed to reopen image for customization: %1</source>
        <translation>カスタマイズのためにイメージを再度開くことができませんでした: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="92"/>
        <source>Extracting bootloader files from image...</source>
        <translation>イメージからブートローダー ファイルを抽出しています...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="95"/>
        <source>Sending bootloader files...</source>
        <translation>ブートローダー ファイルを送信しています...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="98"/>
        <source>Waiting for device to enter DFU mode...</source>
        <translation>デバイスが DFU モードに入るのを待っています...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="101"/>
        <source>Sending image to device (this may take several minutes)...</source>
        <translation>画像をデバイスに送信しています (これには数分かかる場合があります)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="104"/>
        <source>Writing boot binaries to eMMC (do not power off)...</source>
        <translation>ブート バイナリを eMMC に書き込んでいます (電源を切らないでください)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="107"/>
        <source>System image sent successfully!</source>
        <translation>システムイメージが正常に送信されました。</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="123"/>
        <source>DFU failed (alt: %1): %2</source>
        <translation>DFU が失敗しました (代替: %1): %2</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="139"/>
        <source>Sending %1...</source>
        <translation>%1 を送信中...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="142"/>
        <source>%1 sent</source>
        <translation>%1 を送信しました</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="145"/>
        <source>Waiting for device to reconnect...</source>
        <translation>デバイスの再接続を待機しています...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="162"/>
        <source>Failed to reopen image file: %1</source>
        <translation>画像ファイルを再度開くことができませんでした: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="174"/>
        <source>Bootloader file not found in image: %1</source>
        <translation>ブートローダー ファイルがイメージ内に見つかりません: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="185"/>
        <source>Failed to create temp file for %1</source>
        <translation>%1 の一時ファイルの作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="190"/>
        <source>Failed to write temp file for %1</source>
        <translation>%1 の一時ファイルの書き込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="199"/>
        <source>Error reading bootloader files from image: %1</source>
        <translation>イメージからのブートローダー ファイルの読み取りエラー: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="209"/>
        <source>Image not found: %1</source>
        <translation>画像が見つかりません: %1</translation>
    </message>
</context>
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="206"/>
        <location filename="../downloadextractthread.cpp" line="400"/>
        <source>Error extracting archive: %1</source>
        <translation>アーカイブを展開するのに失敗しました</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="271"/>
        <source>Error mounting FAT32 partition</source>
        <translation>FAT32パーティションをマウントできませんでした</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="291"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>OSがFAT32パーティションをマウントしませんでした</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="314"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>カレントディレクトリを%1に変更できませんでした</translation>
    </message>
    <message>
        <source>Error writing to storage</source>
        <translation type="vanished">ストレージに書き込むのに失敗しました</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="119"/>
        <source>unmounting drive</source>
        <translation>ドライブをアンマウントしています</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="139"/>
        <source>opening drive</source>
        <translation>デバイスを開いています</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="167"/>
        <source>Error running diskpart: %1</source>
        <translation>diskpartの実行に失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="188"/>
        <source>Error removing existing partitions</source>
        <translation>既に有るパーティションを削除する際にエラーが発生しました。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="214"/>
        <source>Authentication cancelled</source>
        <translation>認証がキャンセルされました</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>ディスク%1にアクセスするための権限を取得するためにauthopenを実行するのに失敗しました</translation>
    </message>
    <message>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation type="vanished">Raspberry Pi Imagerがリムーバブルボリュームへアクセスすることが「プライバシーとセキュリティ」の「ファイルとフォルダー」の設定、または「フルディスクアクセス」の付与によって許可されているかを確認してください。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="218"/>
        <source>Please verify if &apos;Gemstone Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="240"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>ストレージを開けませんでした。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="282"/>
        <source>discarding existing data on drive</source>
        <translation>ドライブの現存するすべてのデータを破棄します</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>ドライブの最初と最後のMBを削除しています</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="310"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>MBRを削除している際にエラーが発生しました。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="322"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>カードの最後のパートを0で書き込む際書き込みエラーが発生しました。カードが示している容量と実際のカードの容量が違う可能性があります。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="412"/>
        <source>starting download</source>
        <translation>ダウンロードを開始中</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="472"/>
        <source>Error downloading: %1</source>
        <translation>%1をダウンロードする際エラーが発生しました</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="669"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>ディスクにファイルを書き込む際にアクセスが拒否されました。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="674"/>
        <source>Controlled Folder Access seems to be enabled. Please add both gem-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>フォルダーへのアクセスが制限されています。許可されたアプリにgem-imager.exeとfat32format.exeを入れてもう一度お試しください。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="681"/>
        <source>Error writing file to disk</source>
        <translation>ファイルをディスクに書き込んでいる際にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="703"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>ダウンロードに失敗しました。ハッシュ値が一致していません。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="715"/>
        <location filename="../downloadthread.cpp" line="767"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>ストレージへの書き込み中にエラーが発生しました (フラッシング中)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="722"/>
        <location filename="../downloadthread.cpp" line="774"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>ストレージへの書き込み中にエラーが発生しました（fsync中)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing first block (partition table)</source>
        <translation>最初のブロック（パーティションテーブル）を書き込み中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="834"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>ストレージを読むのに失敗しました。SDカードが壊れている可能性があります。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="853"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>確認中にエラーが発生しました。書き込んだはずのデータが実際にSDカードに記録されたデータと一致していません。</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="908"/>
        <source>Customizing image</source>
        <translation>イメージをカスタマイズしています</translation>
    </message>
    <message>
        <source>Waiting for FAT partition to be mounted</source>
        <translation type="vanished">FATパーティションがマウントされるのを待っています</translation>
    </message>
    <message>
        <source>Error mounting FAT32 partition</source>
        <translation type="vanished">FAT32パーティションをマウントする際にエラーが発生しました。</translation>
    </message>
    <message>
        <source>Operating system did not mount FAT32 partition</source>
        <translation type="vanished">OSがFAT32パーティションをマウントしませんでした。</translation>
    </message>
    <message>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation type="vanished">カスタマイズできません。%1が存在しません。</translation>
    </message>
    <message>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation type="vanished">FATパーティションにfirstrun.shを作成する際にエラーが発生しました</translation>
    </message>
    <message>
        <source>Error writing to config.txt on FAT partition</source>
        <translation type="vanished">FATパーティションにconfig.txtを書き込むときにエラーが発生しました</translation>
    </message>
    <message>
        <source>Error creating user-data cloudinit file on FAT partition</source>
        <translation type="vanished">FATパーティションにCloud-initのuser-dataファイル名前を作成するときにエラーが発生しました</translation>
    </message>
    <message>
        <source>Error creating network-config cloudinit file on FAT partition</source>
        <translation type="vanished">FATパーティションにCloud-initのnetwork-configファイルを作成するときにエラーが発生しました</translation>
    </message>
    <message>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation type="vanished">FATパーティションにcmdline.txtを書き込む際にエラーが発生しました</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>パーティショニングに失敗しました: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>fat32formatを開始中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>fat32formatを実行中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>新しいドライブレターを判断している際にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>不適切なデバイス: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>udisk2を介してフォーマットするのに失敗しました</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>sfdiskを開始中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>パーティショニングが想定したFATパーティション %1を作りませんでした</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>mkfs.fatを開始中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>mkfs.fatを実行中にエラーが発生しました: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>このプラットフォームではフォーマットできません。</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="313"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>ストレージの容量が足りません。少なくとも%1GBは必要です。</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="319"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>入力されたファイルは適切なディスクイメージファイルではありません。ファイルサイズの%1は512バイトの倍数ではありません。</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="777"/>
        <source>Downloading and writing image</source>
        <translation>イメージをダウンロードして書き込んでいます</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="939"/>
        <source>DFU mode not selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="967"/>
        <source>Authentication failed or was cancelled.&lt;br&gt;DFU operation requires elevated privileges to access the USB device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1047"/>
        <source>Select image</source>
        <translation>イメージを選ぶ</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1222"/>
        <source>Error synchronizing time. Trying again in 3 seconds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1234"/>
        <source>STP is enabled on your Ethernet switch. Getting IP will take long time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1486"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Wifiのパスワードをシステムのキーチェーンから読み取って設定しますか？</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>イメージファイルを開いています</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>イメージファイルを開く際にエラーが発生しました</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="121"/>
        <source>NO</source>
        <translation>いいえ</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>YES</source>
        <translation>はい</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="139"/>
        <source>CONTINUE</source>
        <translation>続ける</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="147"/>
        <source>QUIT</source>
        <translation>やめる</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="27"/>
        <source>OS Customization</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>for this session only</source>
        <translation type="vanished">このセッションでのみ有効にする</translation>
    </message>
    <message>
        <source>to always use</source>
        <translation type="vanished">いつも使う設定にする</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="61"/>
        <source>General</source>
        <translation>一般</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="70"/>
        <source>Services</source>
        <translation>サービス</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="76"/>
        <source>Options</source>
        <translation>オプション</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="110"/>
        <source>Set hostname:</source>
        <translation>ホスト名:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="139"/>
        <source>Set username and password</source>
        <translation>ユーザー名とパスワードを設定する</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="153"/>
        <source>Username:</source>
        <translation>ユーザー名</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="179"/>
        <source>Password is required!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="187"/>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Password:</source>
        <translation>パスワード:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="228"/>
        <source>Configure wireless LAN</source>
        <translation>Wi-Fiを設定する</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="242"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="293"/>
        <source>Show password</source>
        <translation>パスワードを見る</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="304"/>
        <source>Hidden SSID</source>
        <translation>ステルスSSID</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="315"/>
        <source>Wireless LAN country:</source>
        <translation>Wifiを使う国:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>Set locale settings</source>
        <translation>ロケール設定をする</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="337"/>
        <source>Time zone:</source>
        <translation>タイムゾーン:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="356"/>
        <source>Keyboard layout:</source>
        <translation>キーボードレイアウト:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Set Disk Encryption (Cryptsetup)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="385"/>
        <source>Disk Password:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="426"/>
        <source>Write sdcard&apos;s image to eMMC on first boot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="451"/>
        <source>Enable SSH</source>
        <translation>SSHを有効化する</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="467"/>
        <source>Use password authentication</source>
        <translation>パスワード認証を使う</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="478"/>
        <source>Allow public-key authentication only</source>
        <translation>公開鍵認証のみを許可する</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="489"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>ユーザー%1のためのauthorized_keys</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="533"/>
        <source>Delete Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="552"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>ssh-keygenを実行する</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="562"/>
        <source>Add SSH Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="578"/>
        <source>Enable VNC</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="583"/>
        <source>VNC Password is required!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="591"/>
        <source>VNC Password:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="610"/>
        <source>Gadgets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="616"/>
        <source>Enable Storage Gadget</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="622"/>
        <source>Enable Ethernet Gadget</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="628"/>
        <source>Enable Serial Gadgets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="653"/>
        <source>Play sound when finished</source>
        <translation>終わったときに音を鳴らす</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="657"/>
        <source>Eject media when finished</source>
        <translation>終わったときにメディアを取り出す</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="676"/>
        <source>Serial Port </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="708"/>
        <source>Ethernet </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable telemetry</source>
        <translation type="vanished">テレメトリーを有効化</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="752"/>
        <source>SAVE</source>
        <translation>保存</translation>
    </message>
    <message>
        <source>Disable overscan</source>
        <translation type="vanished">オーバースキャンを無効化する</translation>
    </message>
    <message>
        <source>Skip first-run wizard</source>
        <translation type="vanished">最初のセットアップウィザートをスキップする</translation>
    </message>
    <message>
        <source>Persistent settings</source>
        <translation type="vanished">永続的な設定</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="126"/>
        <source>Internal SD card reader</source>
        <translation>SDカードリーダー</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="46"/>
        <source>Use OS customization?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="98"/>
        <source>Would you like to apply OS customization settings?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="139"/>
        <source>NO</source>
        <translation>いいえ</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="120"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>いいえ、設定をクリアする</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="130"/>
        <source>YES</source>
        <translation>はい</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>EDIT SETTINGS</source>
        <translation>設定を編集する</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Raspberry Pi Imager v%1</source>
        <translation type="vanished">Raspberry Pi Imager v%1</translation>
    </message>
    <message>
        <source>Raspberry Pi Device</source>
        <translation type="vanished">Raspberry Piデバイス</translation>
    </message>
    <message>
        <location filename="../main.qml" line="134"/>
        <source>CHOOSE DEVICE</source>
        <translation>デバイスを選択</translation>
    </message>
    <message>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation type="vanished">対象のRaspberry Piを選択するには、このボタンを押してください。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="160"/>
        <location filename="../main.qml" line="555"/>
        <source>Operating System</source>
        <translation>OS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <location filename="../main.qml" line="1977"/>
        <source>CHOOSE OS</source>
        <translation>OSを選択</translation>
    </message>
    <message>
        <location filename="../main.qml" line="183"/>
        <source>Select this button to change the operating system</source>
        <translation>OSを変更するにはこのボタンを押してください</translation>
    </message>
    <message>
        <location filename="../main.qml" line="197"/>
        <location filename="../main.qml" line="957"/>
        <source>Storage</source>
        <translation>ストレージ</translation>
    </message>
    <message>
        <location filename="../main.qml" line="330"/>
        <source>Network not ready yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1022"/>
        <source>No storage devices found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="208"/>
        <location filename="../main.qml" line="1643"/>
        <source>CHOOSE STORAGE</source>
        <translation>ストレージを選択</translation>
    </message>
    <message>
        <source>WRITE</source>
        <translation type="vanished">書き込む</translation>
    </message>
    <message>
        <location filename="../main.qml" line="222"/>
        <source>Select this button to change the destination storage device</source>
        <translation>書き込み先のストレージデバイスを選択するにはこのボタンを押してください</translation>
    </message>
    <message>
        <location filename="../main.qml" line="267"/>
        <source>CANCEL WRITE</source>
        <translation>書き込みをキャンセル</translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <location filename="../main.qml" line="1527"/>
        <location filename="../main.qml" line="1538"/>
        <source>Cancelling...</source>
        <translation>キャンセル中です...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="282"/>
        <source>CANCEL VERIFY</source>
        <translation>確認をやめる</translation>
    </message>
    <message>
        <location filename="../main.qml" line="285"/>
        <location filename="../main.qml" line="1561"/>
        <location filename="../main.qml" line="1670"/>
        <source>Finalizing...</source>
        <translation>最終処理をしています...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <source>Next</source>
        <translation>次へ</translation>
    </message>
    <message>
        <location filename="../main.qml" line="300"/>
        <source>Select this button to start writing the image</source>
        <translation>書き込みをスタートさせるにはこのボタンを押してください</translation>
    </message>
    <message>
        <source>Select this button to access advanced settings</source>
        <translation type="vanished">詳細な設定を変更するのならこのボタンを押してください</translation>
    </message>
    <message>
        <location filename="../main.qml" line="320"/>
        <source>Using custom repository: %1</source>
        <translation>カスタムレポジトリを使います: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="339"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>キーボードの操作: 次のボタンに移動する→Tabキー  ボタンを押す/選択する→Spaceキー  上に行く/下に行く→矢印キー（上下）</translation>
    </message>
    <message>
        <location filename="../main.qml" line="360"/>
        <source>Language: </source>
        <translation>言語: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="383"/>
        <source>Keyboard: </source>
        <translation>キーボード: </translation>
    </message>
    <message>
        <source>Pi model:</source>
        <translation type="vanished">Raspberry Pi モデル:</translation>
    </message>
    <message>
        <location filename="../main.qml" line="24"/>
        <source>Gemstone Image Writer %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="122"/>
        <location filename="../main.qml" line="453"/>
        <source>Gemstone Board</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="146"/>
        <source>Select this button to choose your target Gemstone Board</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="497"/>
        <source>[ All ]</source>
        <translation>[すべて]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="653"/>
        <source>Back</source>
        <translation>戻る</translation>
    </message>
    <message>
        <location filename="../main.qml" line="654"/>
        <source>Go back to main menu</source>
        <translation>メインメニューへ戻る</translation>
    </message>
    <message>
        <location filename="../main.qml" line="900"/>
        <source>Released: %1</source>
        <translation>リリース日時: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="910"/>
        <source>Cached on your computer</source>
        <translation>コンピュータにキャッシュされたファイル</translation>
    </message>
    <message>
        <location filename="../main.qml" line="912"/>
        <source>Local file</source>
        <translation>ローカルファイル</translation>
    </message>
    <message>
        <location filename="../main.qml" line="913"/>
        <source>Online - %1 GB download</source>
        <translation>インターネットからダウンロード - %1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1057"/>
        <source>Exclude System Drives</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1115"/>
        <source>Internal eMMC - 32 GB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1125"/>
        <source>Writes the image to the card&apos;s internal eMMC memory via Uniflash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1213"/>
        <location filename="../main.qml" line="2140"/>
        <source>DFU Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1223"/>
        <source>Program the device via USB DFU (Device Firmware Update)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1268"/>
        <source>gigabytes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1270"/>
        <location filename="../main.qml" line="1332"/>
        <source>Mounted as %1</source>
        <translation>%1 としてマウントされています</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1318"/>
        <source>GB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1334"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[書き込み禁止]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1336"/>
        <source>SYSTEM</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1394"/>
        <location filename="../main.qml" line="1401"/>
        <source>Boot Mode Switch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1395"/>
        <source>Configure the boot mode switches for DFU Boot as shown in the image.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1402"/>
        <source>DFU programming completed successfully!&lt;br&gt;&lt;br&gt;After powering off the card, set the boot mode switches to eMMC Boot as shown in the image. Upon restoring power, the system will boot automatically.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1411"/>
        <source>Are you sure you want to quit?</source>
        <translation>本当にやめますか？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1412"/>
        <source>Gemstone Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation type="vanished">Raspberry Pi Imagerは現在まだ処理中です。&lt;bt&gt;本当にやめますか？</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1448"/>
        <source>Preparing to write...</source>
        <translation>書き込み準備中...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1457"/>
        <source>Image will be sent to device via DFU.&lt;br&gt;Are you sure you want to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1459"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>%1 に存在するすべてのデータは完全に削除されます。本当に続けますか？</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1475"/>
        <source>Update available</source>
        <translation>アップデートがあります</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1476"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>新しいバージョンのImagerがあります。&lt;br&gt;ダウンロードするためにウェブサイトを開きますか？</translation>
    </message>
    <message>
        <source>Error downloading OS list from Internet</source>
        <translation type="vanished">OSのリストをダウンロードする際にエラーが発生しました。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1530"/>
        <source>Writing... %1%</source>
        <translation>書き込み中... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1541"/>
        <source>Sending... %1%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1564"/>
        <source>Verifying... %1%</source>
        <translation>確認中... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1571"/>
        <source>Preparing to write... (%1)</source>
        <translation>書き込み準備中... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1582"/>
        <source>Waiting for authentication to access USB device...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1605"/>
        <source>Error</source>
        <translation>エラー</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1612"/>
        <source>Write Successful</source>
        <translation>書き込みが正常に終了しました</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1613"/>
        <location filename="../imagewriter.cpp" line="719"/>
        <source>Erase</source>
        <translation>削除</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1614"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b%gt;%1&lt;/b&gt; は削除されました。&lt;br&gt;&lt;bt&gt;SDカードをSDカードリーダーから取り出すことができます。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1629"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;The process is complete. You can connect to the board via the serial port.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="1633"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; は&lt;b&gt;%2&lt;/b&gt;に書き込まれました。&lt;br&gt;&lt;br&gt;SDカードをSDカードリーダーから取り出すことができます。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1798"/>
        <source>Error parsing os_list.json</source>
        <translation>os_list.jsonの処理中にエラーが発生しました</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="720"/>
        <source>Format card as FAT32</source>
        <translation>カードをFAT32でフォーマットする</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="726"/>
        <source>Use custom</source>
        <translation>カスタムイメージを使う</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="727"/>
        <source>Select a custom .img from your computer</source>
        <translation>自分で用意したイメージファイルを使う</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2051"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>最初にイメージファイルがあるUSBメモリを接続してください。&lt;br&gt;イメージファイルはUSBメモリの一番上（ルートフォルダー）に入れてください。</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2129"/>
        <source>Onboard emmc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main.qml" line="2165"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>SDカードへの書き込みが制限されています。&lt;br&gt;カードの左上にあるロックスイッチを上げてロックを解除し、もう一度お試しください。</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; は&lt;b&gt;%2&lt;/b&gt;に書き込まれました。</translation>
    </message>
</context>
</TS>
