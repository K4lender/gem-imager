# DFU (Device Firmware Update) Implementation

## Overview

Gemstone Imager includes cross-platform DFU support for updating device firmware directly from the application. The implementation bundles dfu-util binaries for Windows, macOS, and Linux to ensure consistent functionality across all platforms.

## Architecture

### Build-time Components

1. **cmake/DownloadDfuUtil.cmake**
   - Downloads dfu-util v0.11 binaries during build
   - Extracts platform-specific executables
   - Verifies file integrity (optional checksums)
   - Installs to appropriate directories

2. **CMakeLists.txt Integration**
   - Calls download script at configuration time
   - Copies binaries to application bundle/installer
   - Platform-specific installation:
     - **Windows**: `deploy/dfu-util.exe`
     - **macOS**: `GemstoneImager.app/Contents/MacOS/dfu-util`
     - **Linux**: `/usr/bin/dfu-util` or `/usr/share/gem-imager/bin/dfu-util`

### Runtime Components

1. **DfuThread Class** (`dfuthread.h/cpp`)
   - Background thread for DFU operations
   - Platform-aware binary discovery
   - Progress reporting via Qt signals
   - Error handling and recovery

2. **Binary Discovery Priority**
   ```
   1. Bundled binary (same directory as executable)
   2. System PATH (for development/fallback)
   3. Default system locations
   ```

3. **Platform-Specific Execution**
   - **Windows**: Direct QProcess calls (no shell scripting)
   - **Linux**: Bash script with pkexec/sudo for USB permissions
   - **macOS**: Direct execution (no privilege escalation needed)

## Usage Flow

1. User selects "DFU Mode" from Storage options
2. Application locates test files (`tiboot3.bin`, `tispl.bin`, `u-boot.img`)
3. DfuThread verifies dfu-util availability
4. For each file:
   - Send to appropriate alt setting (bootloader, tispl.bin, u-boot.img)
   - Monitor transfer progress
   - Wait for device reconnection
5. Report success/failure to UI

## Security Considerations

1. **Binary Verification**
   - Download from official SourceForge releases
   - Optional SHA256 checksum verification
   - HTTPS-only downloads

2. **Privilege Escalation** (Linux only)
   - Uses pkexec (PolicyKit) for GUI password prompts
   - Falls back to sudo if pkexec unavailable
   - Temporary scripts cleaned up after execution

3. **File Permissions**
   - Bundled binaries marked executable at build time
   - Temporary scripts created with restrictive permissions (0700)
   - All temporary files removed after use

## Dependencies

- **Qt6**: Core, QThread, QProcess
- **dfu-util**: v0.11 (bundled)
- **Platform Tools**:
  - Linux: pkexec/sudo, bash, lsusb
  - Windows: None (native USB access)
  - macOS: None (native USB access)

## File Locations

### Source Files
```
src/
├── dfuthread.h
├── dfuthread.cpp
├── cmake/
│   └── DownloadDfuUtil.cmake
└── CMakeLists.txt (modified)
```

### Test Files (required at runtime)
```
tests/
├── tiboot3.bin
├── tispl.bin
└── u-boot.img
```

### Bundled Binaries (post-build)
```
Windows:  build/deploy/dfu-util.exe
macOS:    build/GemstoneImager.app/Contents/MacOS/dfu-util
Linux:    /usr/bin/dfu-util (installed via package)
```

## Known Limitations

1. **Linux**: Requires pkexec or sudo for USB device access
2. **Windows**: May require USB driver installation for DFU devices
3. **macOS**: Requires macOS 10.15+ for signed dfu-util binary
4. **All Platforms**: Assumes TI J7 device alt setting names (0451:6165)

## Maintenance

### Updating dfu-util Version

1. Edit `src/cmake/DownloadDfuUtil.cmake`
2. Update `DFU_UTIL_VERSION` variable
3. Update SHA256 checksums (if verification enabled)
4. Test on all platforms

### Adding New Device Support

1. Run `dfu-util -l` to discover alt settings
2. Update alt setting names in `dfuthread.cpp`
3. Add device-specific error handling if needed

## Testing

```bash
# Build with bundled dfu-util
cd build
cmake ../src
make

# Verify binary was bundled
ls -lh deploy/dfu-util*  # Windows/Linux
ls -lh GemstoneImager.app/Contents/MacOS/dfu-util  # macOS

# Test DFU operation (requires DFU device in boot mode)
./gem-imager
# Select Storage → DFU Mode → Start
```

## References

- [dfu-util Official Site](https://dfu-util.sourceforge.net/)
- [USB DFU Specification](https://www.usb.org/document-library/device-firmware-upgrade-11-new-version-31-aug-2004)
- [TI J7 DFU Documentation](https://software-dl.ti.com/processor-sdk-linux/esd/docs/latest/linux/Foundational_Components_Multimedia_PSDK_RTOS.html)
