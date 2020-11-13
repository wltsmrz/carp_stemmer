const Module = require('./a.out.js')
const stem = Module.cwrap('stem_MINUS_cstr', 'number', [ 'number' ])

const api = {
  stem: function(str) {
    const byteLen = Module.lengthBytesUTF8(str) +1
    const inPtr = Module._malloc(byteLen)
    Module.stringToUTF8(str, inPtr, byteLen)
    const outPtr = stem(inPtr)
    const res = Module.UTF8ToString(outPtr)
    Module._free(outPtr)
    Module._free(inPtr)
    return res
  },
}

Module.onRuntimeInitialized = function() {
  console.log('stem: %s -> %s', 'programming', api.stem('programming'))
  console.log('stem: %s -> %s', 'vileness', api.stem('vileness'))
}

