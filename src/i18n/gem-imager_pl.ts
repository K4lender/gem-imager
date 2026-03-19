<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl_PL">
<context>
    <name>DfuThread</name>
    <message>
        <location filename="../dfuthread.cpp" line="49"/>
        <source>Failed to create temporary file for DFU image</source>
        <translation>Nie udało się utworzyć pliku tymczasowego dla obrazu DFU</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="59"/>
        <source>Failed to open temporary file for DFU image</source>
        <translation>Nie udało się otworzyć pliku tymczasowego obrazu DFU</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="68"/>
        <source>Initializing DFU...</source>
        <translation>Inicjowanie DFU...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="71"/>
        <source>DFU mode requires an image URL</source>
        <translation>Tryb DFU wymaga adresu URL obrazu</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="75"/>
        <source>Downloading image...</source>
        <translation>Pobieranie obrazu...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="81"/>
        <source>Customizing image...</source>
        <translation>Dostosowywanie obrazu...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="85"/>
        <source>Failed to reopen image for customization: %1</source>
        <translation>Nie udało się ponownie otworzyć obrazu w celu dostosowania: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="92"/>
        <source>Extracting bootloader files from image...</source>
        <translation>Wyodrębnianie plików bootloadera z obrazu...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="95"/>
        <source>Sending bootloader files...</source>
        <translation>Wysyłanie plików bootloadera...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="98"/>
        <source>Waiting for device to enter DFU mode...</source>
        <translation>Oczekiwanie, aż urządzenie przejdzie w tryb DFU...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="101"/>
        <source>Sending image to device (this may take several minutes)...</source>
        <translation>Wysyłanie obrazu do urządzenia (może to zająć kilka minut)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="104"/>
        <source>Writing boot binaries to eMMC (do not power off)...</source>
        <translation>Zapisywanie plików binarnych startowych do eMMC (nie wyłączaj zasilania)...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="107"/>
        <source>System image sent successfully!</source>
        <translation>Obraz systemu został wysłany pomyślnie!</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="123"/>
        <source>DFU failed (alt: %1): %2</source>
        <translation>DFU nie powiodło się (alt: %1): %2</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="139"/>
        <source>Sending %1...</source>
        <translation>Wysyłam %1...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="142"/>
        <source>%1 sent</source>
        <translation>%1 wysłany</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="145"/>
        <source>Waiting for device to reconnect...</source>
        <translation>Oczekiwanie na ponowne połączenie urządzenia...</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="162"/>
        <source>Failed to reopen image file: %1</source>
        <translation>Nie udało się ponownie otworzyć pliku obrazu: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="174"/>
        <source>Bootloader file not found in image: %1</source>
        <translation>Na obrazie nie znaleziono pliku bootloadera: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="185"/>
        <source>Failed to create temp file for %1</source>
        <translation>Nie udało się utworzyć pliku tymczasowego dla %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="190"/>
        <source>Failed to write temp file for %1</source>
        <translation>Nie udało się zapisać pliku tymczasowego dla %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="199"/>
        <source>Error reading bootloader files from image: %1</source>
        <translation>Błąd odczytu plików bootloadera z obrazu: %1</translation>
    </message>
    <message>
        <location filename="../dfuthread.cpp" line="209"/>
        <source>Image not found: %1</source>
        <translation>Nie znaleziono obrazu: %1</translation>
    </message>
</context>
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="206"/>
        <location filename="../downloadextractthread.cpp" line="400"/>
        <source>Error extracting archive: %1</source>
        <translation>Błąd podczas wypakowywania archiwum: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="271"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Błąd montowania partycji FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="291"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>System operacyjny nie zamontował partycji FAT32</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="314"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Błąd przejścia do katalogu &quot;%1&quot;</translation>
    </message>
    <message>
        <source>Error writing to storage</source>
        <translation type="vanished">Błąd zapisu pamięci masowej</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="119"/>
        <source>unmounting drive</source>
        <translation>odmontowywanie dysku</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="139"/>
        <source>opening drive</source>
        <translation>otwieranie dysku</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="167"/>
        <source>Error running diskpart: %1</source>
        <translation>Błąd uruchomienia diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="188"/>
        <source>Error removing existing partitions</source>
        <translation>Błąd usuwania istniejących partycji</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="214"/>
        <source>Authentication cancelled</source>
        <translation>Uwierzytelnianie anulowane</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Błąd uruchomienia authopen w celu uzyskania dostępu do urządzenia dyskowego &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translatorcomment>Not sure if current macOS has that option (or if it got moved/renamed)</translatorcomment>
        <translation type="obsolete">Sprawdź, czy &apos;Raspberry Pi Imager&apos; ma dostęp do &apos;woluminów wymiennych&apos; w ustawieniach prywatności (w &apos;plikach i folderach&apos; lub alternatywnie daj mu &apos;pełny dostęp do dysku&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="218"/>
        <source>Please verify if &apos;Gemstone Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Sprawdź, czy &apos;Gemstone Imager&apos; ma dostęp do &apos;wymiennych woluminów&apos; w ustawieniach prywatności (w sekcji &apos;pliki i foldery&apos; lub przyznaj mu &apos;pełny dostęp do dysku&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="240"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Nie można otworzyć urządzenia pamięci masowej &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="282"/>
        <source>discarding existing data on drive</source>
        <translation>usuwanie istniejących danych na dysku</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="304"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>zerowanie pierwszego oraz ostatniego megabajta dysku</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="310"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Błąd zapisu podczas zerowania MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="322"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Błąd zapisu podczas próby wyzerowania ostatniej części karty.&lt;br&gt;;Karta może pokazywać nieprawidłową pojemność (możliwe podróbki).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="412"/>
        <source>starting download</source>
        <translation>rozpoczęcie pobierania</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="472"/>
        <source>Error downloading: %1</source>
        <translation>Błąd pobierania: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="669"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Odmowa dostępu podczas próby zapisu pliku na dysk.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="674"/>
        <source>Controlled Folder Access seems to be enabled. Please add both gem-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>Dostęp do &quot;Folderów Kontrolowanych&quot; wydaje się być włączony. Dodaj gem-imager.exe i fat32format.exe do listy dozwolonych aplikacji i spróbuj ponownie.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="681"/>
        <source>Error writing file to disk</source>
        <translation>Błąd zapisu pliku na dysk</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="703"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Pobrany plik jest uszkodzony. Nie zgadza się&#xa0;hash</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="715"/>
        <location filename="../downloadthread.cpp" line="767"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Błąd zapisu podczas wykonywania: flushing</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="722"/>
        <location filename="../downloadthread.cpp" line="774"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Błąd zapisu podczas wykonywania: fsync</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="757"/>
        <source>Error writing first block (partition table)</source>
        <translation>Błąd zapisu pierwszego bloku (tablica partycji)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="834"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Błąd odczytu z pamięci masowej.&lt;br&gt;Karta SD może być uszkodzona</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="853"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Weryfikacja zapisu nie powiodła się. Zawartość karty SD różni się od tego, co zostało na niej zapisane.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="908"/>
        <source>Customizing image</source>
        <translation>Dostosowywanie obrazu</translation>
    </message>
    <message>
        <source>Waiting for FAT partition to be mounted</source>
        <translation type="vanished">Oczekiwanie na zamontowanie partycji FAT</translation>
    </message>
    <message>
        <source>Error mounting FAT32 partition</source>
        <translation type="vanished">Błąd podczas montowania partycji FAT32</translation>
    </message>
    <message>
        <source>Operating system did not mount FAT32 partition</source>
        <translation type="vanished">Operating system did not mount FAT32 partition</translation>
    </message>
    <message>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation type="vanished">Nie można dostosować. Plik &apos;%1&apos; nie istnieje.</translation>
    </message>
    <message>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation type="vanished">Błąd podczas tworzenia pliku firstrun.sh na partycji FAT</translation>
    </message>
    <message>
        <source>Error writing to config.txt on FAT partition</source>
        <translation type="vanished">Błąd zapisu do pliku config.txt na partycji FAT</translation>
    </message>
    <message>
        <source>Error creating user-data cloudinit file on FAT partition</source>
        <translation type="vanished">Błąd podczas tworzenia pliku cloudinit danych użytkownika na partycji FAT</translation>
    </message>
    <message>
        <source>Error creating network-config cloudinit file on FAT partition</source>
        <translation type="vanished">Błąd tworzenia pliku cloudinit konfiguracji sieciowej na partycji FAT</translation>
    </message>
    <message>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation type="vanished">Błąd zapisu do pliku cmdline.txt na partycji FAT</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Błąd partycjonowania: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Błąd uruchamiania fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Błąd uruchomienia fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Błąd określania nowej litery dysku</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Nieprawidłowe urządzenie: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Błąd formatowania (przez udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Błąd uruchamienia sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>Partycjonowanie nie utworzyło oczekiwanej partycji FAT %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>Błąd uruchamiania mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Błąd uruchomienia mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formatowanie nie zostało zaimplementowane dla tej platformy</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="313"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>Pojemność pamięci nie jest wystarczająco duża.&lt;br&gt;Musi wynosić co najmniej %1 GB.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="319"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Plik wejściowy nie jest prawidłowym obrazem dysku.&lt;br&gt;Rozmiar pliku %1 bajtów nie jest wielokrotnością 512 bajtów.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="777"/>
        <source>Downloading and writing image</source>
        <translation>Pobieranie i zapisywanie obrazu</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="939"/>
        <source>DFU mode not selected</source>
        <translation>Tryb DFU nie wybrany</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="967"/>
        <source>Authentication failed or was cancelled.&lt;br&gt;DFU operation requires elevated privileges to access the USB device.</source>
        <translation>Uwierzytelnianie nie powiodło się lub zostało anulowane.&lt;br&gt;Operacja DFU wymaga podwyższonych uprawnień do urządzenia USB.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1047"/>
        <source>Select image</source>
        <translation>Wybierz obraz</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1222"/>
        <source>Error synchronizing time. Trying again in 3 seconds</source>
        <translation>Błąd synchronizacji czasu. Ponowna próba za 3 sekundy</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1234"/>
        <source>STP is enabled on your Ethernet switch. Getting IP will take long time.</source>
        <translation>STP jest włączony na przełączniku Ethernet. Uzyskanie adresu IP zajmie dużo czasu.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="1486"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Czy chcesz wstępnie wypełnić hasło Wi-Fi z pęku kluczy systemu?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>otwieranie pliku obrazu</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>Błąd podczas otwierania pliku obrazu</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="121"/>
        <source>NO</source>
        <translation>NIE</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>YES</source>
        <translation>TAK</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="139"/>
        <source>CONTINUE</source>
        <translation>KONTYNUUJ</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="147"/>
        <source>QUIT</source>
        <translation>ZAMKNIJ</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="27"/>
        <source>OS Customization</source>
        <translation>Konfiguracja systemu</translation>
    </message>
    <message>
        <source>OS customization options</source>
        <translation type="vanished">Opcje konfiguracji systemu</translation>
    </message>
    <message>
        <source>for this session only</source>
        <translation type="vanished">tylko dla tej sesji</translation>
    </message>
    <message>
        <source>to always use</source>
        <translation type="vanished">do użycia na zawsze</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="61"/>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="70"/>
        <source>Services</source>
        <translation>Usługi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="76"/>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="110"/>
        <source>Set hostname:</source>
        <translation>ustaw hostname:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="139"/>
        <source>Set username and password</source>
        <translation>Ustaw login i hasło</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="153"/>
        <source>Username:</source>
        <translation>Login:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="179"/>
        <source>Password is required!</source>
        <translation>Hasło jest wymagane!</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="187"/>
        <location filename="../OptionsPopup.qml" line="264"/>
        <source>Password:</source>
        <translation>Hasło:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="228"/>
        <source>Configure wireless LAN</source>
        <translation>Skonfiguruj sieć Wi-Fi</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="242"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="293"/>
        <source>Show password</source>
        <translation>Pokaż hasło</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="304"/>
        <source>Hidden SSID</source>
        <translation>Ukryte SSID</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="315"/>
        <source>Wireless LAN country:</source>
        <translation>Kraj Wi-Fi:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="333"/>
        <source>Set locale settings</source>
        <translation>Ustawienia lokalizacji</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="337"/>
        <source>Time zone:</source>
        <translation>Strefa czasowa:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="356"/>
        <source>Keyboard layout:</source>
        <translation>Układ klawiatury:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Set Disk Encryption (Cryptsetup)</source>
        <translation>Ustaw szyfrowanie dysku (Cryptsetup)</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="385"/>
        <source>Disk Password:</source>
        <translation>Hasło dysku:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="426"/>
        <source>Write sdcard&apos;s image to eMMC on first boot</source>
        <translation>Zapisz obraz karty SD na eMMC przy pierwszym uruchomieniu</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="451"/>
        <source>Enable SSH</source>
        <translation>Włącz SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="467"/>
        <source>Use password authentication</source>
        <translation>Używaj uwierzytelniania hasłem</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="478"/>
        <source>Allow public-key authentication only</source>
        <translation>Pozwól tylko na uwierzytelnianie kluczem publiczym</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="489"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>Ustaw authorized_keys dla &apos;%1&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="533"/>
        <source>Delete Key</source>
        <translation>Usuń klucz</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="552"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>Uruchom SSH-KEYGEN</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="562"/>
        <source>Add SSH Key</source>
        <translation>Dodaj klucz SSH</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="578"/>
        <source>Enable VNC</source>
        <translation>Włącz VNC</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="583"/>
        <source>VNC Password is required!</source>
        <translation>Hasło VNC jest wymagane!</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="591"/>
        <source>VNC Password:</source>
        <translation>Hasło VNC:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="610"/>
        <source>Gadgets</source>
        <translation>Gadżety</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="616"/>
        <source>Enable Storage Gadget</source>
        <translation>Włącz gadżet pamięci</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="622"/>
        <source>Enable Ethernet Gadget</source>
        <translation>Włącz gadżet Ethernet</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="628"/>
        <source>Enable Serial Gadgets</source>
        <translation>Włącz gadżety szeregowe</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="653"/>
        <source>Play sound when finished</source>
        <translation>Odegraj dźwięk po zakończeniu</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="657"/>
        <source>Eject media when finished</source>
        <translation>Wysuń nośnik po zakończeniu</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="676"/>
        <source>Serial Port </source>
        <translation>Port szeregowy </translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="708"/>
        <source>Ethernet </source>
        <translation>Ethernet </translation>
    </message>
    <message>
        <source>Enable telemetry</source>
        <translation type="vanished">Włącz telemetrię</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="752"/>
        <source>SAVE</source>
        <translation>ZAPISZ</translation>
    </message>
    <message>
        <source>Disable overscan</source>
        <translation type="vanished">wyłącz overscan</translation>
    </message>
    <message>
        <source>Set password for &apos;%1&apos; user:</source>
        <translation type="vanished">Ustaw hasło dla użytkownika &apos;%1&apos;:</translation>
    </message>
    <message>
        <source>Skip first-run wizard</source>
        <translation type="vanished">Pomiń kreator pierwszego uruchomienia</translation>
    </message>
    <message>
        <source>Persistent settings</source>
        <translation type="vanished">Ustawienia trwałe</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="126"/>
        <source>Internal SD card reader</source>
        <translation>Wbudowany czytnik kart SD</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="46"/>
        <source>Use OS customization?</source>
        <translation>Zastosować ustawienia systemu operacyjnego?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="98"/>
        <source>Would you like to apply OS customization settings?</source>
        <translation>Czy chcesz zastosować ustawienia personalizacji systemu operacyjnego?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="139"/>
        <source>NO</source>
        <translation>NIE</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="120"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>NIE, WYCZYŚĆ USTAWIENIA</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="130"/>
        <source>YES</source>
        <translation>TAK</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>EDIT SETTINGS</source>
        <translation>EDYTUJ USTAWIENIA</translation>
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
        <translation type="vanished">Model Raspberry Pi</translation>
    </message>
    <message>
        <location filename="../main.qml" line="134"/>
        <source>CHOOSE DEVICE</source>
        <translation>WYBIERZ MODEL</translation>
    </message>
    <message>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation type="vanished">Wybierz ten przycisk, aby wybrać docelowy model Raspberry Pi</translation>
    </message>
    <message>
        <location filename="../main.qml" line="160"/>
        <location filename="../main.qml" line="555"/>
        <source>Operating System</source>
        <translation>System Operacyjny</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <location filename="../main.qml" line="1977"/>
        <source>CHOOSE OS</source>
        <translation>WYBIERZ OS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="183"/>
        <source>Select this button to change the operating system</source>
        <translation>Wybierz ten przycisk, aby zmienić system operacyjny</translation>
    </message>
    <message>
        <location filename="../main.qml" line="197"/>
        <location filename="../main.qml" line="957"/>
        <source>Storage</source>
        <translation>Dysk</translation>
    </message>
    <message>
        <location filename="../main.qml" line="330"/>
        <source>Network not ready yet</source>
        <translation>Sieć jeszcze nie gotowa</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1022"/>
        <source>No storage devices found</source>
        <translation>Nie znaleziono urządzeń pamięci masowej</translation>
    </message>
    <message>
        <location filename="../main.qml" line="208"/>
        <location filename="../main.qml" line="1643"/>
        <source>CHOOSE STORAGE</source>
        <translation>WYBIERZ DYSK</translation>
    </message>
    <message>
        <source>WRITE</source>
        <translation type="vanished">ZAPISZ</translation>
    </message>
    <message>
        <location filename="../main.qml" line="222"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Wybierz ten przycisk, aby zmienić docelowe urządzenie pamięci masowej</translation>
    </message>
    <message>
        <location filename="../main.qml" line="267"/>
        <source>CANCEL WRITE</source>
        <translation>ANULUJ ZAPIS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="270"/>
        <location filename="../main.qml" line="1527"/>
        <location filename="../main.qml" line="1538"/>
        <source>Cancelling...</source>
        <translation>Anulowanie...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="282"/>
        <source>CANCEL VERIFY</source>
        <translation>ANULUJ WERYFIKACJE</translation>
    </message>
    <message>
        <location filename="../main.qml" line="285"/>
        <location filename="../main.qml" line="1561"/>
        <location filename="../main.qml" line="1670"/>
        <source>Finalizing...</source>
        <translation>Finalizowanie...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="294"/>
        <source>Next</source>
        <translation>Kontynuuj</translation>
    </message>
    <message>
        <location filename="../main.qml" line="300"/>
        <source>Select this button to start writing the image</source>
        <translation>Wybierz ten przycisk, aby rozpocząć zapisywanie obrazu</translation>
    </message>
    <message>
        <source>Select this button to access advanced settings</source>
        <translation type="vanished">Wybierz ten przycisk, aby uzyskać dostęp do ustawień zaawansowanych</translation>
    </message>
    <message>
        <location filename="../main.qml" line="320"/>
        <source>Using custom repository: %1</source>
        <translation>Używanie niestandardowego repozytorium: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="339"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Nawigacja za pomocą klawiatury: &lt;tab&gt; przejdź do następnego przycisku &lt;spacja&gt; naciśnij przycisk/wybierz element &lt;strzałka w górę/w dół&gt; przejdź w górę/w dół na listach</translation>
    </message>
    <message>
        <location filename="../main.qml" line="360"/>
        <source>Language: </source>
        <translation>Język: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="383"/>
        <source>Keyboard: </source>
        <translation>Klawiatura: </translation>
    </message>
    <message>
        <source>Pi model:</source>
        <translation type="vanished">Model Pi:</translation>
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
        <translation>Płytka Gemstone</translation>
    </message>
    <message>
        <location filename="../main.qml" line="146"/>
        <source>Select this button to choose your target Gemstone Board</source>
        <translation>Wybierz ten przycisk, aby wybrać docelowy Gemstone Board</translation>
    </message>
    <message>
        <location filename="../main.qml" line="497"/>
        <source>[ All ]</source>
        <translation>[ Wszystko ]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="653"/>
        <source>Back</source>
        <translation>Cofnij</translation>
    </message>
    <message>
        <location filename="../main.qml" line="654"/>
        <source>Go back to main menu</source>
        <translation>Cofnij do głównego menu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="900"/>
        <source>Released: %1</source>
        <translation>Wydany: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="910"/>
        <source>Cached on your computer</source>
        <translation>W pamięci cache komputera</translation>
    </message>
    <message>
        <location filename="../main.qml" line="912"/>
        <source>Local file</source>
        <translation>Plik lokalny</translation>
    </message>
    <message>
        <location filename="../main.qml" line="913"/>
        <source>Online - %1 GB download</source>
        <translation>Online - Pobrano %1 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1057"/>
        <source>Exclude System Drives</source>
        <translation>Wyklucz dyski systemowe</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1115"/>
        <source>Internal eMMC - 32 GB</source>
        <translation>Wewnętrzny eMMC - 32 GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1125"/>
        <source>Writes the image to the card&apos;s internal eMMC memory via Uniflash</source>
        <translation>Zapisuje obraz na wewnętrznej pamięci eMMC karty przez Uniflash</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1213"/>
        <location filename="../main.qml" line="2140"/>
        <source>DFU Mode</source>
        <translation>Tryb DFU</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1223"/>
        <source>Program the device via USB DFU (Device Firmware Update)</source>
        <translation>Programuj urządzenie przez USB DFU (aktualizacja oprogramowania układowego)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1268"/>
        <source>gigabytes</source>
        <translation>gigabajty</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1270"/>
        <location filename="../main.qml" line="1332"/>
        <source>Mounted as %1</source>
        <translation>Zamontowany jako %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1318"/>
        <source>GB</source>
        <translation>GB</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1334"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[ZABEZPIECZONY PRZED ZAPISEM]</translation>
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
        <translation>Przełącznik trybu rozruchu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1395"/>
        <source>Configure the boot mode switches for DFU Boot as shown in the image.</source>
        <translation>Skonfiguruj przełączniki trybu rozruchu dla DFU Boot, jak pokazano na obrazku.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1402"/>
        <source>DFU programming completed successfully!&lt;br&gt;&lt;br&gt;After powering off the card, set the boot mode switches to eMMC Boot as shown in the image. Upon restoring power, the system will boot automatically.</source>
        <translation>Programowanie DFU zakończone pomyślnie!&lt;br&gt;&lt;br&gt;Po wyłączeniu karty ustaw przełączniki trybu rozruchu na eMMC Boot, jak pokazano na obrazku. Po przywróceniu zasilania system uruchomi się automatycznie.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1411"/>
        <source>Are you sure you want to quit?</source>
        <translation>Czy na pewno chcesz zakończyć?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1412"/>
        <source>Gemstone Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Gemstone Imager jest nadal zajęty.&lt;br&gt;Czy na pewno chcesz wyjść?</translation>
    </message>
    <message>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation type="vanished">Raspberry Pi Imager jest wciąż zajęty.&lt;br&gt;Czy na pewno chcesz zakończyć??</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1423"/>
        <source>Warning</source>
        <translation>Uwaga</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1442"/>
        <location filename="../main.qml" line="2152"/>
        <source>Starting DFU operation...</source>
        <translation>Uruchamianie operacji DFU...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1448"/>
        <source>Preparing to write...</source>
        <translation>Przygotowanie do zapisu...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1457"/>
        <source>Image will be sent to device via DFU.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Obraz zostanie wysłany do urządzenia przez DFU.&lt;br&gt;Czy na pewno chcesz kontynuować?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1459"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Wszystkie istniejące dane na &apos;%1&apos; zostaną usunięte.&lt;br&gt;Czy na pewno chcesz kontynuować?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1475"/>
        <source>Update available</source>
        <translation>Dostępna aktualizacja</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1476"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>Dostępna jest nowsza wersja Raspberry Pi Imager.&lt;br&gt;Czy chcesz otworzyć stronę, aby go ściągnąć?</translation>
    </message>
    <message>
        <source>Error downloading OS list from Internet</source>
        <translation type="vanished">Błąd pobierania listy OS&apos;ów z internetu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1530"/>
        <source>Downloading... %1%</source>
        <translation>Pobieranie... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1541"/>
        <source>Sending... %1%</source>
        <translation>Wysyłanie... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1564"/>
        <source>Verifying... %1%</source>
        <translation>Weryfikacja... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1571"/>
        <source>Preparing to write... (%1)</source>
        <translation>Przygotowanie do zapisu... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1582"/>
        <source>Waiting for authentication to access USB device...</source>
        <translation>Oczekiwanie na uwierzytelnianie w celu uzyskania dostępu do urządzenia USB...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1605"/>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1612"/>
        <source>Write Successful</source>
        <translation>Zapis zakończony sukcesem</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1613"/>
        <location filename="../imagewriter.cpp" line="719"/>
        <source>Erase</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1614"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; został skasowany&lt;br&gt;&lt;br&gt; Możesz teraz wyjąć kartę SD z czytnika.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1629"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;The process is complete. You can connect to the board via the serial port.</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; zostało zapisane na &lt;b&gt;%2&lt;/b&gt;.&lt;br&gt;&lt;br&gt;Proces jest zakończony. Możesz połączyć się z kartą przez port szeregowy.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1633"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; został zapisany na &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt; Możesz teraz wyjąć kartę SD z czytnika.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1798"/>
        <source>Error parsing os_list.json</source>
        <translation>Błąd parsowania os_list.json</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="720"/>
        <source>Format card as FAT32</source>
        <translation>Sformatuj kartę jako FAT32</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="726"/>
        <source>Use custom</source>
        <translation>Użyj innego obrazu</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="727"/>
        <source>Select a custom .img from your computer</source>
        <translation>Wybierz plik .img z komputera</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2051"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Najpierw podłącz pamięć USB zawierającą obrazy.&lt;br&gt;Obrazy muszą znajdować się w folderze głównym pamięci USB.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2129"/>
        <source>Onboard emmc</source>
        <translation>Wbudowane eMMC</translation>
    </message>
    <message>
        <location filename="../main.qml" line="2165"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>arta SD jest zabezpieczona przed zapisem.&lt;br&gt;Przesuń przełącznik blokady po lewej stronie karty do góry i spróbuj ponownie.</translation>
    </message>
    <message>
        <source>Select this button to change the destination SD card</source>
        <translation type="vanished">Wybierz ten przycisk, aby zmienić docelową kartę SD</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; zostało zapisane w &lt;b&gt;%2&lt;/b&gt;</translation>
    </message>
</context>
</TS>
