<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de_DE">
<context>
    <name>DfuThread</name>
    <message>
        <location filename="../dfuthread.cpp" line="49"/>
        <source>Failed to create temporary file for DFU image</source>
        <translation>Die temporäre Datei für das DFU-Image konnte nicht erstellt werden</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="59"/>
        <source>Failed to open temporary file for DFU image</source>
        <translation>Die temporäre Datei für das DFU-Image konnte nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="68"/>
        <source>Initializing DFU...</source>
        <translation>DFU wird initialisiert...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="71"/>
        <source>DFU mode requires an image URL</source>
        <translation>Für den DFU-Modus ist eine Bild-URL erforderlich</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="75"/>
        <source>Downloading image...</source>
        <translation>Bild wird heruntergeladen...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="81"/>
        <source>Customizing image...</source>
        <translation>Bild anpassen...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="85"/>
        <source>Failed to reopen image for customization: %1</source>
        <translation>Bild konnte zur Anpassung nicht erneut geöffnet werden: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="92"/>
        <source>Extracting bootloader files from image...</source>
        <translation>Bootloader-Dateien aus Image extrahieren...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="95"/>
        <source>Sending bootloader files...</source>
        <translation>Bootloader-Dateien werden gesendet...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="98"/>
        <source>Waiting for device to enter DFU mode...</source>
        <translation>Warten darauf, dass das Gerät in den DFU-Modus wechselt...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="101"/>
        <source>Sending image to device (this may take several minutes)...</source>
        <translation>Bild wird an das Gerät gesendet (dies kann mehrere Minuten dauern)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="104"/>
        <source>Writing boot binaries to eMMC (do not power off)...</source>
        <translation>Boot-Binärdateien werden in eMMC geschrieben (nicht ausschalten) ...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="107"/>
        <source>System image sent successfully!</source>
        <translation>Systemabbild erfolgreich gesendet!</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="123"/>
        <source>DFU failed (alt: %1): %2</source>
        <translation>DFU fehlgeschlagen (alt: %1): %2</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="139"/>
        <source>Sending %1...</source>
        <translation>%1 wird gesendet...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="142"/>
        <source>%1 sent</source>
        <translation>%1 gesendet</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="145"/>
        <source>Waiting for device to reconnect...</source>
        <translation>Warten auf die erneute Verbindung des Geräts...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="162"/>
        <source>Failed to reopen image file: %1</source>
        <translation>Bilddatei konnte nicht erneut geöffnet werden: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="174"/>
        <source>Bootloader file not found in image: %1</source>
        <translation>Bootloader-Datei nicht im Bild gefunden: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="185"/>
        <source>Failed to create temp file for %1</source>
        <translation>Die temporäre Datei für %1 konnte nicht erstellt werden.</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="190"/>
        <source>Failed to write temp file for %1</source>
        <translation>Die temporäre Datei für %1 konnte nicht geschrieben werden.</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="199"/>
        <source>Error reading bootloader files from image: %1</source>
        <translation>Fehler beim Lesen der Bootloader-Dateien aus dem Image: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="209"/>
        <source>Image not found: %1</source>
        <translation>Bild nicht gefunden: %1</translation>
    </message>
</context>
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="206"/>
        <location filename="../downloadextractthread.cpp" line="400"/>
        <source>Error extracting archive: %1</source>
        <translation>Fehler beim Entpacken des Archivs: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="271"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Fehler beim Einbinden der FAT32-Partition</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="291"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Das Betriebssystem band die FAT32-Partition nicht ein</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="314"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Fehler beim Wechseln in den Ordner &quot;%1&quot;</translation>
    </message>
    <message>
        <source>Error writing to storage</source>
        <translation type="vanished">Fehler beim Schreiben auf den Speicher</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="119"/>
        <source>unmounting drive</source>
        <translation>Laufwerk wird ausgehängt</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="139"/>
        <source>opening drive</source>
        <translation>Laufwerk wird geöffnet</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="167"/>
        <source>Error running diskpart: %1</source>
        <translation>Fehler beim Ausführen von Diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="188"/>
        <source>Error removing existing partitions</source>
        <translation>Fehler beim Entfernen von existierenden Partitionen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="214"/>
        <source>Authentication cancelled</source>
        <translation>Authentifizierung abgebrochen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Fehler beim Ausführen von authopen, um Zugriff auf Geräte zu erhalten &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translatorcomment>Not sure if current macOS has that option (or if it got moved/renamed)</translatorcomment>
        <translation type="obsolete">Bitte stellen Sie sicher, dass &apos;Raspberry Pi Imager&apos; Zugriff auf &apos;removable volumes&apos; in privacy settings hat (unter &apos;files and folders&apos;. Sie können ihm auch &apos;full disk access&apos; geben).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="218"/>
        <source>Please verify if &apos;Gemstone Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Bitte überprüfen Sie, ob &apos;Gemstone Imager&apos; in den Datenschutzeinstellungen Zugriff auf &apos;Wechseldatenträger&apos; hat (unter &apos;Dateien und Ordner&apos; oder geben Sie alternativ &apos;Vollzugriff auf Festplatte&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="240"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Speichergerät &apos;%1&apos; kann nicht geöffnet werden.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="282"/>
        <source>discarding existing data on drive</source>
        <translation>Vorhandene Daten auf dem Medium werden gelöscht</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>Erstes und letztes Megabyte des Mediums werden überschrieben</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="310"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Schreibfehler während des Löschens des MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="322"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Fehler beim Löschen des letzten Teiles der Speicherkarte.&lt;br&gt;Die Speicherkarte könnte mit einer falschen Größe beworben sein (möglicherweise Betrug).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="412"/>
        <source>starting download</source>
        <translation>Download wird gestartet</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="472"/>
        <source>Error downloading: %1</source>
        <translation>Fehler beim Herunterladen: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="669"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Zugriff verweigert-Fehler beim Schreiben auf den Datenträger.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="674"/>
        <source>Controlled Folder Access seems to be enabled. Please add both gem-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>&quot;Überwachter Ordnerzugriff&quot; scheint aktiviert zu sein. Bitte fügen Sie sowohl gem-imager.exe als auch fat32format.exe zur Liste der erlaubten Apps hinzu und versuchen sie es erneut.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="681"/>
        <source>Error writing file to disk</source>
        <translation>Fehler beim Schreiben der Datei auf den Speicher</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="703"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Download beschädigt. Prüfsumme stimmt nicht überein</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="715"/>
        <location filename="../downloadthread.cpp" line="767"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Fehler beim Schreiben auf den Speicher (während flushing)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="722"/>
        <location filename="../downloadthread.cpp" line="774"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Fehler beim Schreiben auf den Speicher (während fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing first block (partition table)</source>
        <translation>Fehler beim Schreiben des ersten Blocks (Partitionstabelle)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="834"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Fehler beim Lesen vom Speicher.&lt;br&gt;Die SD-Karte könnte defekt sein.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="853"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Verifizierung fehlgeschlagen. Der Inhalt der SD-Karte weicht von dem Inhalt ab, der geschrieben werden sollte.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="908"/>
        <source>Customizing image</source>
        <translation>Image modifizieren</translation>
    </message>
    <message>
        <source>Waiting for FAT partition to be mounted</source>
        <translation type="vanished">Warten auf das Einbinden der FAT-Partition</translation>
    </message>
    <message>
        <source>Error mounting FAT32 partition</source>
        <translation type="vanished">Fehler beim Einbinden der FAT32-Partition</translation>
    </message>
    <message>
        <source>Operating system did not mount FAT32 partition</source>
        <translation type="vanished">Das Betriebssystem hat die FAT32-Partition nicht eingebunden.</translation>
    </message>
    <message>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation type="vanished">Modifizieren fehlgeschlagen. Die Datei &apos;%1&apos; existiert nicht.</translation>
    </message>
    <message>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation type="vanished">Fehler beim Erstellen von firstrun.sh auf der FAT-Partition</translation>
    </message>
    <message>
        <source>Error writing to config.txt on FAT partition</source>
        <translation type="vanished">Fehler beim Schreiben in config.txt auf der FAT-Partition</translation>
    </message>
    <message>
        <source>Error creating user-data cloudinit file on FAT partition</source>
        <translation type="vanished">Fehler beim Erstellen der user-data cloudinit Datei auf der FAT-Partition</translation>
    </message>
    <message>
        <source>Error creating network-config cloudinit file on FAT partition</source>
        <translation type="vanished">Fehler beim Erstellen der network-config cloudinit Datei auf der FAT-Partition</translation>
    </message>
    <message>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation type="vanished">Fehler beim Schreiben in cmdline.txt auf der FAT-Partition</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Fehler beim Partitionieren: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Fehler beim Starten von fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Fehler beim Ausführen von fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Fehler beim Festlegen eines neuen Laufwerksbuchstabens</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Ungültiges Gerät: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Fehler beim Formatieren (mit udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Fehler beim Starten von sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>Partitionierung hat nicht die erwartete FAT-partition %1 erstellt</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>Fehler beim Starten von mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Fehler beim Ausführen von mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formatieren wird auf dieser Platform nicht unterstützt</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="313"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>Die Speicherkapazität ist nicht groß genug.&lt;br&gt;Sie muss mindestens %1 GB betragen.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="319"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Die Eingabedatei ist kein gültiges Disk-Image.&lt;br&gt;Die Dateigröße%1 Bytes ist kein Vielfaches von 512 Bytes.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="777"/>
        <source>Downloading and writing image</source>
        <translation>Image herunterladen und schreiben</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="939"/>
        <source>DFU mode not selected</source>
        <translation>DFU-Modus nicht ausgewählt</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="967"/>
        <source>Authentication failed or was cancelled.&lt;br&gt;DFU operation requires elevated privileges to access the USB device.</source>
        <translation>Authentifizierung fehlgeschlagen oder abgebrochen.&lt;br&gt;Der DFU-Vorgang erfordert erhöhte Rechte für den Zugriff auf das USB-Gerät.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1047"/>
        <source>Select image</source>
        <translation>Image wählen</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1222"/>
        <source>Error synchronizing time. Trying again in 3 seconds</source>
        <translation>Fehler beim Synchronisieren der Zeit. Neuer Versuch in 3 Sekunden</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1234"/>
        <source>STP is enabled on your Ethernet switch. Getting IP will take long time.</source>
        <translation>STP ist auf Ihrem Ethernet-Switch aktiviert. Das Abrufen der IP wird lange dauern.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1486"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Möchten Sie das Wifi-Passwort aus dem System-Schlüsselbund vorab ausfüllen?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>Abbilddatei wird geöffnet</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>Fehler beim Öffnen der Imagedatei</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="121"/>
        <source>NO</source>
        <translation>NEIN</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>YES</source>
        <translation>JA</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="139"/>
        <source>CONTINUE</source>
        <translation>WEITER</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="147"/>
        <source>QUIT</source>
        <translation>BEENDEN</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="27"/>
        <source>OS Customization</source>
        <translation>OS Anpassungen</translation>
    </message>
    <message>
        <source>OS customization options</source>
        <translation type="vanished">OS Anpassungen Optionen</translation>
    </message>
    <message>
        <source>for this session only</source>
        <translation type="vanished">nur für diese Sitzung</translation>
    </message>
    <message>
        <source>to always use</source>
        <translation type="vanished">immer verwenden</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="61"/>
        <source>General</source>
        <translation>Allgemein</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="70"/>
        <source>Services</source>
        <translation>Dienste</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="76"/>
        <source>Options</source>
        <translation>Optionen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="110"/>
        <source>Set hostname:</source>
        <translation>Hostname:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="139"/>
        <source>Set username and password</source>
        <translation>Benutzername und Passwort festlegen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="153"/>
        <source>Username:</source>
        <translation>Benutzername:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="179"/>
        <source>Password is required!</source>
        <translation>Passwort ist erforderlich!</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="187"/>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Password:</source>
        <translation>Passwort:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="228"/>
        <source>Configure wireless LAN</source>
        <translation>Wifi einrichten</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="242"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="293"/>
        <source>Show password</source>
        <translation>Passwort anzeigen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="304"/>
        <source>Hidden SSID</source>
        <translation>Verborgene SSID</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="315"/>
        <source>Wireless LAN country:</source>
        <translation>Wifi-Land:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>Set locale settings</source>
        <translation>Spracheinstellungen festlegen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="337"/>
        <source>Time zone:</source>
        <translation>Zeitzone:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="356"/>
        <source>Keyboard layout:</source>
        <translation>Tastaturlayout:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Set Disk Encryption (Cryptsetup)</source>
        <translation>Festplattenverschlüsselung einrichten (Cryptsetup)</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="385"/>
        <source>Disk Password:</source>
        <translation>Festplatten-Passwort:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="426"/>
        <source>Write sdcard&apos;s image to eMMC on first boot</source>
        <translation>Image der SD-Karte beim ersten Start auf eMMC schreiben</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="451"/>
        <source>Enable SSH</source>
        <translation>SSH aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="467"/>
        <source>Use password authentication</source>
        <translation>Passwort zur Authentifizierung verwenden</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="478"/>
        <source>Allow public-key authentication only</source>
        <translation>Authentifizierung via Public-Key</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="489"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>authorized_keys für &apos;%1&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="533"/>
        <source>Delete Key</source>
        <translation>Schlüssel löschen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="552"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>SSH-KEYGEN ausführen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="562"/>
        <source>Add SSH Key</source>
        <translation>SSH-Schlüssel hinzufügen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="578"/>
        <source>Enable VNC</source>
        <translation>VNC aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="583"/>
        <source>VNC Password is required!</source>
        <translation>VNC-Passwort ist erforderlich!</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="591"/>
        <source>VNC Password:</source>
        <translation>VNC-Passwort:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="610"/>
        <source>Gadgets</source>
        <translation>Gadgets</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="616"/>
        <source>Enable Storage Gadget</source>
        <translation>Speicher-Gadget aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="622"/>
        <source>Enable Ethernet Gadget</source>
        <translation>Ethernet-Gadget aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="628"/>
        <source>Enable Serial Gadgets</source>
        <translation>Serielle Gadgets aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="653"/>
        <source>Play sound when finished</source>
        <translation>Tonsignal nach Beenden abspielen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="657"/>
        <source>Eject media when finished</source>
        <translation>Medien nach Beenden auswerfen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="676"/>
        <source>Serial Port </source>
        <translation>Serieller Port </translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="708"/>
        <source>Ethernet </source>
        <translation>Ethernet </translation>
    </message>
    <message>
        <source>Enable telemetry</source>
        <translation type="vanished">Telemetrie aktivieren</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="752"/>
        <source>SAVE</source>
        <translation>SPEICHERN</translation>
    </message>
    <message>
        <source>Disable overscan</source>
        <translation type="vanished">Overscan deaktivieren</translation>
    </message>
    <message>
        <source>Set password for &apos;%1&apos; user:</source>
        <translation type="vanished">Passwort für &apos;%1&apos;:</translation>
    </message>
    <message>
        <source>Skip first-run wizard</source>
        <translation type="vanished">Einrichtungsassistent überspringen</translation>
    </message>
    <message>
        <source>Persistent settings</source>
        <translation type="vanished">Dauerhafte Einstellungen</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="126"/>
        <source>Internal SD card reader</source>
        <translation>Interner SD-Kartenleser</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="46"/>
        <source>Use OS customization?</source>
        <translation>OS Anpassungen anwenden?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="98"/>
        <source>Would you like to apply OS customization settings?</source>
        <translation>Möchten Sie die vorher festgelegten OS Anpassungen anwenden?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="139"/>
        <source>NO</source>
        <translation>NEIN</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="120"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NEIN, EINSTELLUNGEN LÖSCHEN</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="130"/>
        <source>YES</source>
        <translation>JA</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>EDIT SETTINGS</source>
        <translation>EINSTELLUNGEN BEARBEITEN</translation>
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
        <translation type="vanished">Raspberry Pi Modell</translation>
    </message>
    <message>
        <location filename="../main.qml" line="134"/>
        <source>CHOOSE DEVICE</source>
        <translation>MODELL WÄHLEN</translation>
    </message>
    <message>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation type="vanished">Klicken Sie auf diesen Knopf, um den gewünschten Raspberry Pi auszuwählen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="160"/>
        <location filename="../main.qml" line="555"/>
        <source>Operating System</source>
        <translation>Betriebssystem (OS)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <location filename="../main.qml" line="1977"/>
        <source>CHOOSE OS</source>
        <translation>OS WÄHLEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="183"/>
        <source>Select this button to change the operating system</source>
        <translation>Klicken Sie auf diesen Knopf, um das Betriebssystem zu ändern</translation>
    </message>
    <message>
        <location filename="../main.qml" line="197"/>
        <location filename="../main.qml" line="957"/>
        <source>Storage</source>
        <translation>SD-Karte</translation>
    </message>
    <message>
        <location filename="../main.qml" line="330"/>
        <source>Network not ready yet</source>
        <translation>Netzwerk noch nicht bereit</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1022"/>
        <source>No storage devices found</source>
        <translation>Keine SD-Karte gefunden</translation>
    </message>
    <message>
        <location filename="../main.qml" line="208"/>
        <location filename="../main.qml" line="1643"/>
        <source>CHOOSE STORAGE</source>
        <translation>SD-KARTE WÄHLEN</translation>
    </message>
    <message>
        <source>WRITE</source>
        <translation type="vanished">SCHREIBEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="222"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Klicken Sie auf diesen Knopf, um das Ziel-Speichermedium zu ändern</translation>
    </message>
    <message>
        <location filename="../main.qml" line="267"/>
        <source>CANCEL WRITE</source>
        <translation>SCHREIBEN ABBRECHEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <location filename="../main.qml" line="1527"/>
        <location filename="../main.qml" line="1538"/>
        <source>Cancelling...</source>
        <translation>Abbrechen...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="282"/>
        <source>CANCEL VERIFY</source>
        <translation>VERIFIZIERUNG ABBRECHEN</translation>
    </message>
    <message>
        <location filename="../main.qml" line="285"/>
        <location filename="../main.qml" line="1561"/>
        <location filename="../main.qml" line="1670"/>
        <source>Finalizing...</source>
        <translation>Finalisieren...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <source>Next</source>
        <translation>Weiter</translation>
    </message>
    <message>
        <location filename="../main.qml" line="300"/>
        <source>Select this button to start writing the image</source>
        <translation>Klicken Sie auf diesen Knopf, um mit dem Schreiben zu beginnen</translation>
    </message>
    <message>
        <source>Select this button to access advanced settings</source>
        <translation type="vanished">Klicken Sie auf diesen Knopf, um zu den erweiterten Einstellungen zu gelangen.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="320"/>
        <source>Using custom repository: %1</source>
        <translation>Verwende benutzerdefiniertes Repository: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="339"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Tastaturnavigation: &lt;Tab&gt; zum nächsten Knopf navigieren &lt;Leertaste&gt; Knopf drücken/Element auswählen &lt;Pfeil hoch/runter&gt; in Listen nach oben/unten gehen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="360"/>
        <source>Language: </source>
        <translation>Sprache: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="383"/>
        <source>Keyboard: </source>
        <translation>Tastatur: </translation>
    </message>
    <message>
        <source>Pi model:</source>
        <translation type="vanished">Pi Modell:</translation>
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
        <translation>Gemstone Board</translation>
    </message>
    <message>
        <location filename="../main.qml" line="146"/>
        <source>Select this button to choose your target Gemstone Board</source>
        <translation>Klicken Sie hier, um Ihr Ziel-Gemstone Board auszuwählen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="497"/>
        <source>[ All ]</source>
        <translation>[ Alle ]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="653"/>
        <source>Back</source>
        <translation>Zurück</translation>
    </message>
    <message>
        <location filename="../main.qml" line="654"/>
        <source>Go back to main menu</source>
        <translation>Zurück zum Hauptmenü</translation>
    </message>
    <message>
        <location filename="../main.qml" line="900"/>
        <source>Released: %1</source>
        <translation>Veröffentlicht: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="910"/>
        <source>Cached on your computer</source>
        <translation>Auf Ihrem Computer zwischengespeichert</translation>
    </message>
    <message>
        <location filename="../main.qml" line="912"/>
        <source>Local file</source>
        <translation>Lokale Datei</translation>
    </message>
    <message>
        <location filename="../main.qml" line="913"/>
        <source>Online - %1 GB download</source>
        <translation>Online - %1 GB Download</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1057"/>
        <source>Exclude System Drives</source>
        <translation>Systemlaufwerke ausschließen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1115"/>
        <source>Internal eMMC - 32 GB</source>
        <translation>Interner eMMC - 32 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1125"/>
        <source>Writes the image to the card&apos;s internal eMMC memory via Uniflash</source>
        <translation>Schreibt das Image über Uniflash in den internen eMMC-Speicher der Karte</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1213"/>
        <location filename="../main.qml" line="2140"/>
        <source>DFU Mode</source>
        <translation>DFU-Modus</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1223"/>
        <source>Program the device via USB DFU (Device Firmware Update)</source>
        <translation>Gerät über USB DFU (Device Firmware Update) programmieren</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1268"/>
        <source>gigabytes</source>
        <translation>Gigabyte</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1270"/>
        <location filename="../main.qml" line="1332"/>
        <source>Mounted as %1</source>
        <translation>Als %1 eingebunden</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1318"/>
        <source>GB</source>
        <translation>GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1334"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[SCHREIBGESCHÜTZT]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1336"/>
        <source>SYSTEM</source>
        <translation>SYSTEM</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1394"/>
        <location filename="../main.qml" line="1401"/>
        <source>Boot Mode Switch</source>
        <translation>Boot-Modus-Schalter</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1395"/>
        <source>Configure the boot mode switches for DFU Boot as shown in the image.</source>
        <translation>Konfigurieren Sie die Boot-Modus-Schalter für DFU-Boot wie im Bild gezeigt.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1402"/>
        <source>After powering off the card, set the boot mode switches to eMMC Boot as shown in the image. Upon restoring power, the system will boot automatically.</source>
        <translation>Schalten Sie die Karte aus und stellen Sie die Boot-Modus-Schalter auf eMMC-Boot ein, wie im Bild gezeigt. Nach dem Einschalten startet das System automatisch.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1411"/>
        <source>Are you sure you want to quit?</source>
        <translation>Sind Sie sicher, dass Sie beenden möchten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1412"/>
        <source>Gemstone Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Gemstone Imager ist noch beschäftigt.&lt;br&gt;Möchten Sie wirklich beenden?</translation>
    </message>
    <message>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation type="vanished">Der Raspberry Pi Imager ist noch beschäftigt. &lt;br&gt;Möchten Sie wirklich beenden?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1423"/>
        <source>Warning</source>
        <translation>Warnung</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1442"/>
        <location filename="../main.qml" line="2152"/>
        <source>Starting DFU operation...</source>
        <translation>DFU-Vorgang wird gestartet...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1448"/>
        <source>Preparing to write...</source>
        <translation>Schreiben wird vorbereitet...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1457"/>
        <source>Image will be sent to device via DFU.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Das Image wird über DFU an das Gerät gesendet.&lt;br&gt;Möchten Sie wirklich fortfahren?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1459"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Alle vorhandenen Daten auf &apos;%1&apos; werden gelöscht.&lt;br&gt;Möchten Sie wirklich fortfahren?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1475"/>
        <source>Update available</source>
        <translation>Update verfügbar</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1476"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>Eine neuere Version von Imager ist verfügbar.&lt;br&gt;Möchten Sie die Webseite besuchen, um das Update herunterzuladen?</translation>
    </message>
    <message>
        <source>Error downloading OS list from Internet</source>
        <translation type="vanished">Fehler beim Herunterladen der Betriebssystemsliste aus dem Internet</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1530"/>
        <source>Writing... %1%</source>
        <translation>Schreiben... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1541"/>
        <source>Sending... %1%</source>
        <translation>Senden... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1564"/>
        <source>Verifying... %1%</source>
        <translation>Verifizieren... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1571"/>
        <source>Preparing to write... (%1)</source>
        <translation>Schreiben wird vorbereitet... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1582"/>
        <source>Waiting for authentication to access USB device...</source>
        <translation>Warte auf Authentifizierung für den Zugriff auf das USB-Gerät...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1605"/>
        <source>Error</source>
        <translation>Fehler</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1612"/>
        <source>Write Successful</source>
        <translation>Schreiben erfolgreich</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1613"/>
        <location filename="../imagewriter.cpp" line="719"/>
        <source>Erase</source>
        <translation>Löschen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1614"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; wurde geleert&lt;br&gt;&lt;br&gt;Sie können die SD-Karte nun aus dem Lesegerät entfernen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1624"/>
        <source>DFU programming completed successfully!&lt;br&gt;&lt;br&gt;The device has been programmed and should now boot automatically.</source>
        <translation>DFU-Programmierung erfolgreich abgeschlossen!&lt;br&gt;&lt;br&gt;Das Gerät wurde programmiert und sollte jetzt automatisch starten.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1629"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;The process is complete. You can connect to the board via the serial port.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; wurde auf &lt;b&gt;%2&lt;/b&gt; geschrieben.&lt;br&gt;&lt;br&gt;Der Vorgang ist abgeschlossen. Sie können über den seriellen Port eine Verbindung zur Platine herstellen.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1633"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; wurde auf &lt;b&gt;%2&lt;/b&gt; geschrieben&lt;br&gt;&lt;br&gt;Sie können die SD-Karte nun aus dem Lesegerät entfernen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1798"/>
        <source>Error parsing os_list.json</source>
        <translation>Fehler beim Parsen von os_list.json</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="720"/>
        <source>Format card as FAT32</source>
        <translation>Karte als FAT32 formatieren</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="726"/>
        <source>Use custom</source>
        <translation>Eigenes Image</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="727"/>
        <source>Select a custom .img from your computer</source>
        <translation>Wählen Sie eine eigene .img-Datei von Ihrem Computer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2051"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Verbinden Sie zuerst einen USB-Stick mit Images.&lt;br&gt;Die Images müssen sich im Wurzelverzeichnes des USB-Sticks befinden.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2129"/>
        <source>Onboard emmc</source>
        <translation>Interner eMMC</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2165"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>Die Speicherkarte ist schreibgeschützt.&lt;br&gt;Schieben Sie den Schutzschalter auf der linken Seite nach oben, und versuchen Sie es erneut.</translation>
    </message>
    <message>
        <source>Select this button to change the destination SD card</source>
        <translation type="vanished">Klicke auf diesen Knopf, um die Ziel-SD-Karte zu ändern</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; wurde auf &lt;b&gt;%2&lt;/b&gt; geschrieben</translation>
    </message>
</context>
</TS>
