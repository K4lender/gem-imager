# CMake build file for dfu-util (embedded in gem-imager)
cmake_minimum_required(VERSION 3.15)

# Find libusb-1.0
if(WIN32)
    # Windows: Use bundled libusb or system libusb
    find_package(PkgConfig)
    if(PkgConfig_FOUND)
        pkg_check_modules(LIBUSB libusb-1.0>=1.0.0)
    endif()
    
    if(NOT LIBUSB_FOUND)
        # Try to find libusb manually (e.g., from MSYS2 or vcpkg)
        find_path(LIBUSB_INCLUDE_DIR libusb.h PATH_SUFFIXES libusb-1.0)
        find_library(LIBUSB_LIBRARY NAMES usb-1.0 libusb-1.0)
        
        if(LIBUSB_INCLUDE_DIR AND LIBUSB_LIBRARY)
            set(LIBUSB_FOUND TRUE)
            set(LIBUSB_INCLUDE_DIRS ${LIBUSB_INCLUDE_DIR})
            set(LIBUSB_LIBRARIES ${LIBUSB_LIBRARY})
        endif()
    endif()
else()
    # Linux/macOS: Use pkg-config
    find_package(PkgConfig REQUIRED)
    pkg_check_modules(LIBUSB REQUIRED libusb-1.0>=1.0.0)
endif()

if(NOT LIBUSB_FOUND)
    message(FATAL_ERROR "libusb-1.0 not found. Please install libusb-1.0-dev (Debian/Ubuntu) or libusb-devel (Fedora/RHEL)")
endif()

# Platform-specific definitions
if(WIN32)
    add_definitions(-DHAVE_WINDOWS_H)
    add_definitions(-D_CRT_SECURE_NO_WARNINGS)
elseif(UNIX)
    add_definitions(-DHAVE_CONFIG_H)
    add_definitions(-DHAVE_UNISTD_H)
    add_definitions(-DHAVE_NANOSLEEP)
    add_definitions(-DHAVE_ERR)
    add_definitions(-DHAVE_SYSEXITS_H)
endif()

# Source files (excluding main.c, suffix.c, prefix.c - they have their own main())
set(DFU_UTIL_SOURCES
    dfu.c
    dfu_file.c
    dfu_load.c
    dfu_util.c
    dfuse.c
    dfuse_mem.c
    quirks.c
)

# Create a static library
add_library(dfu-util-lib STATIC ${DFU_UTIL_SOURCES})

target_include_directories(dfu-util-lib PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${LIBUSB_INCLUDE_DIRS}
)

target_link_libraries(dfu-util-lib PUBLIC
    ${LIBUSB_LIBRARIES}
)

target_compile_options(dfu-util-lib PRIVATE
    ${LIBUSB_CFLAGS_OTHER}
)

# Export variables for parent project
set(DFU_UTIL_INCLUDE_DIR ${CMAKE_CURRENT_SOURCE_DIR} PARENT_SCOPE)
set(DFU_UTIL_LIBRARY dfu-util-lib PARENT_SCOPE)
