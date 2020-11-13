
Porter stemmer interpretation in carp

Compiled to webassembly via emscripten:

```
emcc main.c -O3 -g0 -I/home/w/carp/Carp/core -I.. -s ALLOW_MEMORY_GROWTH=1 \
-s EXPORTED_FUNCTIONS='["_malloc","_free","_stem_MINUS_cstr"]' \
-s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap","stringToUTF8","lengthBytesUTF8","UTF8ToString"]'
```

