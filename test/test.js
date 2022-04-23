import { beep } from '../index.js'
import { sleep } from 'a1-util'

async function test() {
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
