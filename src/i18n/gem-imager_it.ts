<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it_IT">
<context>
    <name>DfuThread</name>
    <message>
        <location filename="../dfuthread.cpp" line="49"/>
        <source>Failed to create temporary file for DFU image</source>
        <translation>Impossibile creare il file temporaneo per l&apos;immagine DFU</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="59"/>
        <source>Failed to open temporary file for DFU image</source>
        <translation>Impossibile aprire il file temporaneo per l&apos;immagine DFU</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="68"/>
        <source>Initializing DFU...</source>
        <translation>Inizializzazione DFU...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="71"/>
        <source>DFU mode requires an image URL</source>
        <translation>La modalità DFU richiede un URL di immagine</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="75"/>
        <source>Downloading image...</source>
        <translation>Download dell&apos;immagine...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="81"/>
        <source>Customizing image...</source>
        <translation>Personalizzazione dell&apos;immagine...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="85"/>
        <source>Failed to reopen image for customization: %1</source>
        <translation>Impossibile riaprire l&apos;immagine per la personalizzazione: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="92"/>
        <source>Extracting bootloader files from image...</source>
        <translation>Estrazione dei file del bootloader dall&apos;immagine in corso...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="95"/>
        <source>Sending bootloader files...</source>
        <translation>Invio file del bootloader...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="98"/>
        <source>Waiting for device to enter DFU mode...</source>
        <translation>In attesa che il dispositivo entri in modalità DFU...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="101"/>
        <source>Sending image to device (this may take several minutes)...</source>
        <translation>Invio immagine al dispositivo (l&apos;operazione potrebbe richiedere diversi minuti)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="104"/>
        <source>Writing boot binaries to eMMC (do not power off)...</source>
        <translation>Scrittura dei binari di avvio su eMMC (non spegnere)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="107"/>
        <source>System image sent successfully!</source>
        <translation>Immagine di sistema inviata con successo!</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="123"/>
        <source>DFU failed (alt: %1): %2</source>
        <translation>DFU non riuscito (alt: %1): %2</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="139"/>
        <source>Sending %1...</source>
        <translation>Invio %1...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="142"/>
        <source>%1 sent</source>
        <translation>%1 inviato</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="145"/>
        <source>Waiting for device to reconnect...</source>
        <translation>In attesa della riconnessione del dispositivo...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="162"/>
        <source>Failed to reopen image file: %1</source>
        <translation>Impossibile riaprire il file immagine: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="174"/>
        <source>Bootloader file not found in image: %1</source>
        <translation>File del bootloader non trovato nell&apos;immagine: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="185"/>
        <source>Failed to create temp file for %1</source>
        <translation>Impossibile creare il file temporaneo per %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="190"/>
        <source>Failed to write temp file for %1</source>
        <translation>Impossibile scrivere il file temporaneo per %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="199"/>
        <source>Error reading bootloader files from image: %1</source>
        <translation>Errore durante la lettura dei file del bootloader dall&apos;immagine: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="209"/>
        <source>Image not found: %1</source>
        <translation>Immagine non trovata: %1</translation>
    </message>
</context>
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="206"/>
        <location filename="../downloadextractthread.cpp" line="400"/>
        <source>Error extracting archive: %1</source>
        <translation>Errore estrazione archivio: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="271"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Errore montaggio partizione FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="291"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Il sistema operativo non ha montato la partizione FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="314"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Errore passaggio a cartella &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="119"/>
        <source>unmounting drive</source>
        <translation>smontaggio unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="139"/>
        <source>opening drive</source>
        <translation>apertura unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="167"/>
        <source>Error running diskpart: %1</source>
        <translation>Errore esecuzione diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="188"/>
        <source>Error removing existing partitions</source>
        <translation>Errore rimozione partizioni esistenti</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="214"/>
        <source>Authentication cancelled</source>
        <translation>Autenticazione annullata</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Errore esecuzione auhopen per ottenere accesso al dispositivo disco %1</translation>
    </message>
    <message>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation type="vanished">Verifica se a &apos;Raspberry Pi Imager&apos; è consentito l&apos;accesso a &apos;volumi rimovibili&apos; nelle impostazioni privacy (in &apos;file e cartelle&apos; o in alternativa concedi &apos;accesso completo al disco&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="218"/>
        <source>Please verify if &apos;Gemstone Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Verificare se &apos;Gemstone Imager&apos; è autorizzato ad accedere ai &apos;volumi rimovibili&apos; nelle impostazioni sulla privacy (in &apos;file e cartelle&apos; o in alternativa concedergli l&apos;accesso completo al disco).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="240"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Impossibile aprire dispositivo storage &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="282"/>
        <source>discarding existing data on drive</source>
        <translation>elimina i dati esistenti nell&apos;unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>azzera il primo e l&apos;ultimo MB dell&apos;unità</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="310"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Errore scrittura durante azzeramento MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="322"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Errore di scrittura durante il tentativo di azzerare l&apos;ultima parte della scheda.&lt;br&gt;La scheda potrebbe riportare una capacità maggiore di quella reale (possibile contraffazione).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="412"/>
        <source>starting download</source>
        <translation>avvio download</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="472"/>
        <source>Error downloading: %1</source>
        <translation>Errore download: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="669"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Errore accesso negato durante la scrittura del file su disco.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="674"/>
        <source>Controlled Folder Access seems to be enabled. Please add both gem-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>Sembra sia abilitato l&apos;accesso controllato alle cartelle. 
Aggiungi sia &apos;gem-imager.exe&apos; che &apos;fat32format.exe&apos; all&apos;elenco delle app consentite e riprova.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="681"/>
        <source>Error writing file to disk</source>
        <translation>Errore scrittura file su disco</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="703"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Download corrotto.&lt;br&gt;L&apos;hash non corrisponde</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="715"/>
        <location filename="../downloadthread.cpp" line="767"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Errore scrittura nello storage (durante flushing)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="722"/>
        <location filename="../downloadthread.cpp" line="774"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Errore scrittura nello storage (durante fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing first block (partition table)</source>
        <translation>Errore scrittura primo blocco (tabella partizione)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="834"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Errore lettura dallo storage.&lt;br&gt;La scheda SD potrebbe essere danneggiata.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="853"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Verifica scrittura fallita.&lt;br&gt;Il contenuto della SD è differente da quello che vi è stato scritto.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="908"/>
        <source>Customizing image</source>
        <translation>Personalizza immagine</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Errore partizionamento: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Errore avvio fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Errore esecuzione fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Errore determinazione nuova lettera unità</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Dispositivo non valido: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Errore formattazione (attraverso udisk2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Errore avvio sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>Il partizionamento non ha creato la partizione FAT prevista %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>Errore avvio mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Errore esecuzione mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formattazione non implementata per questa piattaforma</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="313"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>La capacità dello storage non è sufficiente.&lt;br&gt;Sono necessari almeno %1 GB.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="319"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Il file sorgente non è un&apos;immagine disco valida.&lt;br&gt;La dimensione file %1 non è un multiplo di 512 byte.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="777"/>
        <source>Downloading and writing image</source>
        <translation>Download e scrittura file immagine</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="939"/>
        <source>DFU mode not selected</source>
        <translation>Modalità DFU non selezionata</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="967"/>
        <source>Authentication failed or was cancelled.&lt;br&gt;DFU operation requires elevated privileges to access the USB device.</source>
        <translation>Autenticazione fallita o annullata.&lt;br&gt;L&apos;operazione DFU richiede privilegi elevati per accedere al dispositivo USB.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1047"/>
        <source>Select image</source>
        <translation>Seleziona file immagine</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1222"/>
        <source>Error synchronizing time. Trying again in 3 seconds</source>
        <translation>Errore durante la sincronizzazione dell&apos;ora, riprova tra 3 secondi</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1234"/>
        <source>STP is enabled on your Ethernet switch. Getting IP will take long time.</source>
        <translation>STP è abilitato sullo switch Ethernet. Ottenere l&apos;IP richiederà molto tempo.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1486"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Vuoi precompilare la password WiFi usando il portachiavi di sistema?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>apertura file immagine</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>Errore durante l&apos;apertura del file immagine</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="121"/>
        <source>NO</source>
        <translation>NO</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>YES</source>
        <translation>SI</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="139"/>
        <source>CONTINUE</source>
        <translation>CONTINUA</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="147"/>
        <source>QUIT</source>
        <translation>ESCI</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="27"/>
        <source>OS Customization</source>
        <translation>Personalizzazione SO</translation>
    </message>
    <message>
        <source>OS customization options</source>
        <translation type="vanished">Opzioni personalizzazione SO</translation>
    </message>
    <message>
        <source>for this session only</source>
        <translation type="vanished">solo per questa sessione</translation>
    </message>
    <message>
        <source>to always use</source>
        <translation type="vanished">da usare sempre</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="61"/>
        <source>General</source>
        <translation>Generale</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="70"/>
        <source>Services</source>
        <translation>Servizi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="76"/>
        <source>Options</source>
        <translation>Opzioni</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="110"/>
        <source>Set hostname:</source>
        <translation>Imposta nome host:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="139"/>
        <source>Set username and password</source>
        <translation>Imposta nome utente e password</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="153"/>
        <source>Username:</source>
        <translation>Nome utente:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="179"/>
        <source>Password is required!</source>
        <translation>La password è obbligatoria!</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="187"/>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Password:</source>
        <translation>Password:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="228"/>
        <source>Configure wireless LAN</source>
        <translation>Configura WiFi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="242"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="293"/>
        <source>Show password</source>
        <translation>Visualizza password</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="304"/>
        <source>Hidden SSID</source>
        <translation>SSID nascosto</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="315"/>
        <source>Wireless LAN country:</source>
        <translation>Nazione WiFi:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>Set locale settings</source>
        <translation>Imposta configurazioni locali</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="337"/>
        <source>Time zone:</source>
        <translation>Fuso orario:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="356"/>
        <source>Keyboard layout:</source>
        <translation>Layout tastiera:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Set Disk Encryption (Cryptsetup)</source>
        <translation>Imposta crittografia disco (Cryptsetup)</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="385"/>
        <source>Disk Password:</source>
        <translation>Password del disco:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="426"/>
        <source>Write sdcard&apos;s image to eMMC on first boot</source>
        <translation>Scrivi l&apos;immagine della scheda SD sull&apos;eMMC al primo avvio</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="451"/>
        <source>Enable SSH</source>
        <translation>Abilita SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="467"/>
        <source>Use password authentication</source>
        <translation>Usa password autenticazione</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="478"/>
        <source>Allow public-key authentication only</source>
        <translation>Permetti solo autenticazione con chiave pubblica</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="489"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>Imposta authorized_keys per &apos;%1&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="533"/>
        <source>Delete Key</source>
        <translation>Elimina chiave</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="552"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>ESEGUI SSH-KEYGEN</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="562"/>
        <source>Add SSH Key</source>
        <translation>Aggiungi chiave SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="578"/>
        <source>Enable VNC</source>
        <translation>Abilita VNC</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="583"/>
        <source>VNC Password is required!</source>
        <translation>La password VNC è obbligatoria!</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="591"/>
        <source>VNC Password:</source>
        <translation>Password VNC:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="610"/>
        <source>Gadgets</source>
        <translation>Gadget</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="616"/>
        <source>Enable Storage Gadget</source>
        <translation>Abilita gadget di archiviazione</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="622"/>
        <source>Enable Ethernet Gadget</source>
        <translation>Abilita gadget Ethernet</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="628"/>
        <source>Enable Serial Gadgets</source>
        <translation>Abilita gadget seriali</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="653"/>
        <source>Play sound when finished</source>
        <translation>Riproduci suono quando completato</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="657"/>
        <source>Eject media when finished</source>
        <translation>Espelli media quando completato</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="676"/>
        <source>Serial Port </source>
        <translation>Porta seriale </translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="708"/>
        <source>Ethernet </source>
        <translation>Ethernet </translation>
    </message>
    <message>
        <source>Enable telemetry</source>
        <translation type="vanished">Abilita telemetria</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="752"/>
        <source>SAVE</source>
        <translation>SALVA</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="126"/>
        <source>Internal SD card reader</source>
        <translation>Lettore scheda SD interno</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="46"/>
        <source>Use OS customization?</source>
        <translation>Vuoi usare la personalizzaizone SO?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="98"/>
        <source>Would you like to apply OS customization settings?</source>
        <translation>Vuoi applicare le impostazioni personalizzazione sistema operativo?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="139"/>
        <source>NO</source>
        <translation>NO</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="120"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NO, AZZERA IMPOSTAZIONI</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="130"/>
        <source>YES</source>
        <translation>SI&apos;</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>EDIT SETTINGS</source>
        <translation>MODIFICA IMPOSTAZIONI</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <source>Raspberry Pi Imager v%1</source>
        <translation type="vanished">Raspberry Pi Imager v. %1</translation>
    </message>
    <message>
        <source>Raspberry Pi Device</source>
        <translation type="vanished">Dispositivo Raspberry Pi</translation>
    </message>
    <message>
        <location filename="../main.qml" line="134"/>
        <source>CHOOSE DEVICE</source>
        <translation>SCEGLI DISPOSITIVO</translation>
    </message>
    <message>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation type="vanished">Seleziona questo pulsante per scegliere il Raspberry Pi destinazione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="160"/>
        <location filename="../main.qml" line="555"/>
        <source>Operating System</source>
        <translation>Sistema operativo</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <location filename="../main.qml" line="1977"/>
        <source>CHOOSE OS</source>
        <translation>SCEGLI S.O.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="183"/>
        <source>Select this button to change the operating system</source>
        <translation>Seleziona questo pulsante per modificare il sistema operativo scelto</translation>
    </message>
    <message>
        <location filename="../main.qml" line="197"/>
        <location filename="../main.qml" line="957"/>
        <source>Storage</source>
        <translation>Scheda SD</translation>
    </message>
    <message>
        <location filename="../main.qml" line="330"/>
        <source>Network not ready yet</source>
        <translation>Rete non ancora pronta</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1022"/>
        <source>No storage devices found</source>
        <translation>Nessun dispositivo archiviazione trovato</translation>
    </message>
    <message>
        <location filename="../main.qml" line="208"/>
        <location filename="../main.qml" line="1643"/>
        <source>CHOOSE STORAGE</source>
        <translation>SCEGLI SCHEDA SD</translation>
    </message>
    <message>
        <source>WRITE</source>
        <translation type="vanished">SCRIVI</translation>
    </message>
    <message>
        <location filename="../main.qml" line="222"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Seleziona questo pulsante per modificare il dispositivo archiviazione destinazione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="267"/>
        <source>CANCEL WRITE</source>
        <translation>ANNULLA SCRITTURA</translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <location filename="../main.qml" line="1527"/>
        <location filename="../main.qml" line="1538"/>
        <source>Cancelling...</source>
        <translation>Annullamento...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="282"/>
        <source>CANCEL VERIFY</source>
        <translation>ANNULLA VERIFICA</translation>
    </message>
    <message>
        <location filename="../main.qml" line="285"/>
        <location filename="../main.qml" line="1561"/>
        <location filename="../main.qml" line="1670"/>
        <source>Finalizing...</source>
        <translation>Finalizzazione...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <source>Next</source>
        <translation>Avanti</translation>
    </message>
    <message>
        <location filename="../main.qml" line="300"/>
        <source>Select this button to start writing the image</source>
        <translation>Seleziona questo pulsante per avviare la scrittura del file immagine</translation>
    </message>
    <message>
        <source>Select this button to access advanced settings</source>
        <translation type="vanished">Seleziona questo pulsante per accedere alle impostazioni avanzate</translation>
    </message>
    <message>
        <location filename="../main.qml" line="320"/>
        <source>Using custom repository: %1</source>
        <translation>Usa repository personalizzato: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="339"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Navigazione da tastiera: &lt;tab&gt; vai al prossimo pulsante &lt;spazio&gt; premi il pulsante/seleziona la voce &lt;freccia su/giù&gt; vai su/giù negli elenchi</translation>
    </message>
    <message>
        <location filename="../main.qml" line="360"/>
        <source>Language: </source>
        <translation>Lingua: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="383"/>
        <source>Keyboard: </source>
        <translation>Tastiera: </translation>
    </message>
    <message>
        <source>Pi model:</source>
        <translation type="vanished">Modello Pi:</translation>
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
        <translation>Fare clic su questo pulsante per scegliere il Gemstone Board di destinazione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="497"/>
        <source>[ All ]</source>
        <translation>[ Tutti ]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="653"/>
        <source>Back</source>
        <translation>Indietro</translation>
    </message>
    <message>
        <location filename="../main.qml" line="654"/>
        <source>Go back to main menu</source>
        <translation>Torna al menu principale</translation>
    </message>
    <message>
        <location filename="../main.qml" line="900"/>
        <source>Released: %1</source>
        <translation>Rilasciato: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="910"/>
        <source>Cached on your computer</source>
        <translation>Memorizzato temporaneamente nel computer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="912"/>
        <source>Local file</source>
        <translation>File locale</translation>
    </message>
    <message>
        <location filename="../main.qml" line="913"/>
        <source>Online - %1 GB download</source>
        <translation>Online - Download %1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1057"/>
        <source>Exclude System Drives</source>
        <translation>Escludi unità di sistema</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1115"/>
        <source>Internal eMMC - 32 GB</source>
        <translation>eMMC interno - 32 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1125"/>
        <source>Writes the image to the card&apos;s internal eMMC memory via Uniflash</source>
        <translation>Scrive l&apos;immagine nella memoria eMMC interna della scheda tramite Uniflash</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1213"/>
        <location filename="../main.qml" line="2140"/>
        <source>DFU Mode</source>
        <translation>Modalità DFU</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1223"/>
        <source>Program the device via USB DFU (Device Firmware Update)</source>
        <translation>Programma il dispositivo tramite USB DFU (Device Firmware Update)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1268"/>
        <source>gigabytes</source>
        <translation>gigabyte</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1270"/>
        <location filename="../main.qml" line="1332"/>
        <source>Mounted as %1</source>
        <translation>Montato come %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1318"/>
        <source>GB</source>
        <translation>GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1334"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[PROTETTA DA SCRITTURA]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1336"/>
        <source>SYSTEM</source>
        <translation>SISTEMA</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1394"/>
        <location filename="../main.qml" line="1401"/>
        <source>Boot Mode Switch</source>
        <translation>Interruttore modalità di avvio</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1395"/>
        <source>Configure the boot mode switches for DFU Boot as shown in the image.</source>
        <translation>Configurare gli interruttori della modalità di avvio per DFU Boot come mostrato nell&apos;immagine.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1402"/>
        <source>After powering off the card, set the boot mode switches to eMMC Boot as shown in the image. Upon restoring power, the system will boot automatically.</source>
        <translation>Dopo aver spento la scheda, impostare gli interruttori della modalità di avvio su eMMC Boot come mostrato nell&apos;immagine. Al ripristino dell&apos;alimentazione, il sistema si avvierà automaticamente.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1411"/>
        <source>Are you sure you want to quit?</source>
        <translation>Sei sicuro di voler uscire?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1412"/>
        <source>Gemstone Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Gemstone Imager è ancora occupato.&lt;br&gt;Sei sicuro di voler uscire?</translation>
    </message>
    <message>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation type="vanished">Raspberry Pi Image è occupato.&lt;br&gt;Sei sicuro di voler uscire?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1423"/>
        <source>Warning</source>
        <translation>Attenzione</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1442"/>
        <location filename="../main.qml" line="2152"/>
        <source>Starting DFU operation...</source>
        <translation>Avvio operazione DFU...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1448"/>
        <source>Preparing to write...</source>
        <translation>Preparazione scrittura...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1457"/>
        <source>Image will be sent to device via DFU.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>L&apos;immagine verrà inviata al dispositivo tramite DFU.&lt;br&gt;Sei sicuro di voler continuare?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1459"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Tutti i dati esistenti in &apos;%1&apos; verranno eliminati.&lt;br&gt;Sei sicuro di voler continuare?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1475"/>
        <source>Update available</source>
        <translation>Aggiornamento disponibile</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1476"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>È disponibile una nuova versione di Imager.&lt;br&gt;Vuoi visitare il sito web per scaricare la nuova versione?</translation>
    </message>
    <message>
        <source>Error downloading OS list from Internet</source>
        <translation type="vanished">Errore durante download elenco SO da internet</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1530"/>
        <source>Writing... %1%</source>
        <translation>Scrittura...%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1541"/>
        <source>Sending... %1%</source>
        <translation>Invio... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1564"/>
        <source>Verifying... %1%</source>
        <translation>Verifica...%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1571"/>
        <source>Preparing to write... (%1)</source>
        <translation>Preparazione scrittura... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1582"/>
        <source>Waiting for authentication to access USB device...</source>
        <translation>In attesa di autenticazione per accedere al dispositivo USB...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1605"/>
        <source>Error</source>
        <translation>Errore</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1612"/>
        <source>Write Successful</source>
        <translation>Scrittura completata senza errori</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1613"/>
        <location filename="../imagewriter.cpp" line="719"/>
        <source>Erase</source>
        <translation>Cancella</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1614"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>Azzeramento di &lt;b&gt;%1&lt;/b&gt; completato&lt;br&gt;&lt;br&gt;Ora puoi rimuovere la scheda SD dal lettore</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1624"/>
        <source>DFU programming completed successfully!&lt;br&gt;&lt;br&gt;The device has been programmed and should now boot automatically.</source>
        <translation>Programmazione DFU completata con successo!&lt;br&gt;&lt;br&gt;Il dispositivo è stato programmato e dovrebbe avviarsi automaticamente.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1629"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;The process is complete. You can connect to the board via the serial port.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; è stato scritto su &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;Il processo è completo. È possibile connettersi alla scheda tramite la porta seriale.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1633"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>Scrittura di &lt;b&gt;%1&lt;/b&gt; in &lt;b&gt;%2&lt;/b&gt; completata&lt;br&gt;&lt;br&gt;Ora puoi rimuovere la scheda SD dal lettore</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1798"/>
        <source>Error parsing os_list.json</source>
        <translation>Errore durante analisi file os_list.json</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="720"/>
        <source>Format card as FAT32</source>
        <translation>Formatta scheda come FAT32</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="726"/>
        <source>Use custom</source>
        <translation>Usa immagine personalizzata</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="727"/>
        <source>Select a custom .img from your computer</source>
        <translation>Seleziona un file immagine .img personalizzato</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2051"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Prima collega una chiavetta USB contenente il file immagine.&lt;br&gt;Il file immagine deve essere presente nella cartella principale della chiavetta USB.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2129"/>
        <source>Onboard emmc</source>
        <translation>eMMC integrato</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2165"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>La scheda SD è protetta da scrittura.&lt;br&gt;Sposta verso l&apos;alto l&apos;interruttore LOCK sul lato sinistro della scheda SD e riprova.</translation>
    </message>
</context>
</TS>
