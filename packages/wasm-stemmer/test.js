const {stem} = require('./')

async function main() {
  console.table({
    disloyal: await stem('disloyal'),
    blasphemous: await stem('blasphemous'),
    allayment: await stem('allayment'),
    yielding: await stem('yielding')
  })
}

main()
