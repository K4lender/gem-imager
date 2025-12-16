# Download and extract dfu-util binaries for cross-platform support
# SPDX-License-Identifier: Apache-2.0

set(DFU_UTIL_VERSION "0.11")
set(DFU_UTIL_BASE_URL "https://dfu-util.sourceforge.net/releases")

# All platforms use the same binaries archive
set(DFU_UTIL_URL "${DFU_UTIL_BASE_URL}/dfu-util-${DFU_UTIL_VERSION}-binaries.tar.xz")

# Expected MD5: Available at https://dfu-util.sourceforge.net/releases/dfu-util-0.11-binaries.tar.xz.md5
# Checksum verification is optional and can be enabled by uncommenting the relevant section below

set(DFU_UTIL_DIR "${CMAKE_BINARY_DIR}/dfu-util")

function(download_dfu_util)
    if(WIN32)
        set(BINARY_NAME "dfu-util.exe")
        set(EXTRACT_SUBDIR "win64")
    elseif(APPLE)
        set(BINARY_NAME "dfu-util")
        set(EXTRACT_SUBDIR "darwin-arm64")  # or darwin-amd64 depending on arch
    else() # Linux
        set(BINARY_NAME "dfu-util")
        if(CMAKE_SYSTEM_PROCESSOR MATCHES "aarch64|arm64")
            set(EXTRACT_SUBDIR "linux-arm64")
        elseif(CMAKE_SYSTEM_PROCESSOR MATCHES "armv7")
            set(EXTRACT_SUBDIR "linux-armel")
        else()
            set(EXTRACT_SUBDIR "linux-amd64")
        endif()
    endif()

    set(ARCHIVE_FILE "${DFU_UTIL_DIR}/dfu-util-${DFU_UTIL_VERSION}-binaries.tar.xz")
    set(BINARY_PATH "${DFU_UTIL_DIR}/${EXTRACT_SUBDIR}/${BINARY_NAME}")

    # Check if already downloaded and extracted
    if(EXISTS "${BINARY_PATH}")
        message(STATUS "dfu-util binary already exists: ${BINARY_PATH}")
        return()
    endif()

    # Create directory
    file(MAKE_DIRECTORY "${DFU_UTIL_DIR}")

    # Download if not exists
    if(NOT EXISTS "${ARCHIVE_FILE}")
        message(STATUS "Downloading dfu-util from ${DFU_UTIL_URL}...")
        file(DOWNLOAD "${DFU_UTIL_URL}" "${ARCHIVE_FILE}"
             SHOW_PROGRESS
             STATUS DOWNLOAD_STATUS
             TIMEOUT 60)
        
        list(GET DOWNLOAD_STATUS 0 STATUS_CODE)
        if(NOT STATUS_CODE EQUAL 0)
            list(GET DOWNLOAD_STATUS 1 ERROR_MSG)
            message(WARNING "Failed to download dfu-util: ${ERROR_MSG}. DFU functionality will require system dfu-util.")
            return()
        endif()
    endif()

    # Verify checksum (optional but recommended)
    # file(SHA256 "${ARCHIVE_FILE}" ACTUAL_SHA256)
    # if(NOT ACTUAL_SHA256 STREQUAL EXPECTED_SHA256)
    #     message(WARNING "dfu-util checksum mismatch. Download may be corrupted.")
    #     file(REMOVE "${ARCHIVE_FILE}")
    #     return()
    # endif()

    # Extract archive
    message(STATUS "Extracting dfu-util...")
    execute_process(
        COMMAND ${CMAKE_COMMAND} -E tar xJf "${ARCHIVE_FILE}"
        WORKING_DIRECTORY "${DFU_UTIL_DIR}"
        RESULT_VARIABLE EXTRACT_RESULT
    )

    if(NOT EXTRACT_RESULT EQUAL 0)
        message(WARNING "Failed to extract dfu-util archive.")
        return()
    endif()

    # Find the binary in extracted files
    # The archive structure is: dfu-util-0.11-binaries/<platform>/dfu-util[.exe]
    file(GLOB_RECURSE FOUND_BINARIES 
         "${DFU_UTIL_DIR}/dfu-util-${DFU_UTIL_VERSION}-binaries/*/${BINARY_NAME}"
         "${DFU_UTIL_DIR}/*/dfu-util-${DFU_UTIL_VERSION}-binaries/*/${BINARY_NAME}")
    
    if(FOUND_BINARIES)
        # Find the correct platform binary
        foreach(FOUND_BINARY ${FOUND_BINARIES})
            if(WIN32 AND FOUND_BINARY MATCHES "win")
                set(SELECTED_BINARY ${FOUND_BINARY})
                break()
            elseif(APPLE AND FOUND_BINARY MATCHES "darwin")
                set(SELECTED_BINARY ${FOUND_BINARY})
                break()
            elseif(UNIX AND NOT APPLE AND FOUND_BINARY MATCHES "linux")
                # Match architecture if possible
                if(CMAKE_SYSTEM_PROCESSOR MATCHES "aarch64|arm64" AND FOUND_BINARY MATCHES "arm64")
                    set(SELECTED_BINARY ${FOUND_BINARY})
                    break()
                elseif(CMAKE_SYSTEM_PROCESSOR MATCHES "x86_64|amd64" AND FOUND_BINARY MATCHES "amd64")
                    set(SELECTED_BINARY ${FOUND_BINARY})
                    break()
                elseif(NOT SELECTED_BINARY)
                    # Fallback to first Linux binary
                    set(SELECTED_BINARY ${FOUND_BINARY})
                endif()
            endif()
        endforeach()
        
        if(SELECTED_BINARY)
            file(MAKE_DIRECTORY "${DFU_UTIL_DIR}/${EXTRACT_SUBDIR}")
            file(COPY "${SELECTED_BINARY}" DESTINATION "${DFU_UTIL_DIR}/${EXTRACT_SUBDIR}/")
            
            # Make executable on Unix
            if(UNIX)
                execute_process(COMMAND chmod +x "${BINARY_PATH}")
            endif()
            
            message(STATUS "dfu-util binary ready at: ${BINARY_PATH}")
        else()
            message(WARNING "Could not find matching dfu-util binary for this platform.")
        endif()
    else()
        message(WARNING "Could not find dfu-util binary in extracted archive.")
    endif()
endfunction()

# Export paths for use in main CMakeLists.txt
if(WIN32)
    set(DFU_UTIL_BINARY "${DFU_UTIL_DIR}/win64/dfu-util.exe" PARENT_SCOPE)
elseif(APPLE)
    # Try both arm64 and amd64
    if(EXISTS "${DFU_UTIL_DIR}/darwin-arm64/dfu-util")
        set(DFU_UTIL_BINARY "${DFU_UTIL_DIR}/darwin-arm64/dfu-util" PARENT_SCOPE)
    else()
        set(DFU_UTIL_BINARY "${DFU_UTIL_DIR}/darwin-amd64/dfu-util" PARENT_SCOPE)
    endif()
else()
    # Linux - try architecture-specific first
    if(CMAKE_SYSTEM_PROCESSOR MATCHES "aarch64|arm64")
        set(DFU_UTIL_BINARY "${DFU_UTIL_DIR}/linux-arm64/dfu-util" PARENT_SCOPE)
    elseif(CMAKE_SYSTEM_PROCESSOR MATCHES "armv7")
        set(DFU_UTIL_BINARY "${DFU_UTIL_DIR}/linux-armel/dfu-util" PARENT_SCOPE)
    else()
        set(DFU_UTIL_BINARY "${DFU_UTIL_DIR}/linux-amd64/dfu-util" PARENT_SCOPE)
    endif()
endif()
