#!/bin/bash
# Source this. Puts emcmake on PATH, installing emsdk ${EMSDK_VERSION} into ../emsdk if absent.
EMSDK_VERSION=${EMSDK_VERSION:-3.1.10}

if ! command -v emcmake >/dev/null 2>&1; then
    emsdk_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/emsdk"
    if [ ! -d "$emsdk_dir" ]; then
        git clone https://github.com/emscripten-core/emsdk.git "$emsdk_dir"
    fi
    # The emsdk tag decides the bundled node; emscripten 3.1.10 output breaks on node >= 18 (global fetch).
    git -C "$emsdk_dir" checkout -q "$EMSDK_VERSION"
    "$emsdk_dir/emsdk" install "$EMSDK_VERSION"
    "$emsdk_dir/emsdk" activate "$EMSDK_VERSION"
    source "$emsdk_dir/emsdk_env.sh"
fi
