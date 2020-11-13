#!/bin/bash

set -e

echo "building carp.."
carp -b src/stemmer.carp

echo "generating wasm.."
emcc ./out/main.c -o ./stemmer.js -O3 -g0 -I$CARP_DIR/core -I. -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_FUNCTIONS='["_malloc","_free","_stem_MINUS_cstr"]' \
  -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap","stringToUTF8","lengthBytesUTF8","UTF8ToString"]' \
