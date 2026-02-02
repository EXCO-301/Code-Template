cmake_minimum_required(VERSION 4.0)
project(starter CXX)

if(USE_CLANG_TIDY)
    find_program(CLANG_TIDY_EXE NAMES clang-tidy)
    if(CLANG_TIDY_EXE)
        message(STATUS "Clang-tidy found: ${CLANG_TIDY_EXE}")
        set(CMAKE_CXX_CLANG_TIDY "${CLANG_TIDY_EXE};--config-file=${CMAKE_CURRENT_SOURCE_DIR}/.clang-tidy")
    else()
        message(STATUS "Clang-tidy not found - continuing without clang-tidy")
    endif()
else()
    message(WARNING "Clang-tidy checks disabled")
endif()

build_application(
    SOURCES
    application.cpp

    PACKAGES
    glfw3
    Vulkan
    glm
    stb
    vulkan-cpp

    LINK_PACKAGES
    glfw
    Vulkan::Vulkan
    glm::glm
    stb::stb
    vulkan-cpp
)