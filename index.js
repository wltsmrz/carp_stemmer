const Module = require('./stemmer.js')
const stemWrap = Module.cwrap('stem_MINUS_cstr', 'number', [ 'number' ])

const initPromise = new Promise((resolve, reject) =>
  Module.onRuntimeInitialized = () => resolve())

async function stem(str) {
  await initPromise

  const byteLen = Module.lengthBytesUTF8(str) + 1
  const inPtr = Module._malloc(byteLen)
  Module.stringToUTF8(str, inPtr, byteLen)
  const outPtr = stemWrap(inPtr)
  const res = Module.UTF8ToString(outPtr)
  Module._free(outPtr)
  Module._free(inPtr)

  return res
}

exports.stem = stem
