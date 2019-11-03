const { beep } = require('../index')
const { sleep } = require('a1-util')

async function test() {
  // test normal beep
  beep()
  await sleep(1000)
  // test songs 
  beep('. ... .  . .') //roger rabbit
  await sleep(5000)
  beep('. . ... .... ..') // stadium
  await sleep(6000)
  beep('. ... . .. .. ..') // star wars
}

test().catch(err => console.error(err))
