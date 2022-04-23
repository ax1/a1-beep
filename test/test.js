const { beep } = require('../index')

async function test() {
  const { sleep } = await import('a1-util')
  // test normal beep
  beep()
  await sleep(2000)
  // test songs 
  beep('. ... .  . .') //roger rabbit
  await sleep(5000)
  beep('. . ... .... ..') // stadium
  await sleep(6000)
  beep('. . .  . .. . ..') // star wars
}

test().catch(console.error)
