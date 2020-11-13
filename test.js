const {stem} = require('./')

async function main() {
  console.log('stem: %s -> %s', 'programming', await stem('programming'))
  console.log('stem: %s -> %s', 'vileness', await stem('vileness'))
}

main()
