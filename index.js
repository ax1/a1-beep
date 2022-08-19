import { execute, sleep } from 'a1-util'
import { fileURLToPath, URL } from 'url'

let __dirname = fileURLToPath(new URL('.', import.meta.url))
if (__dirname.endsWith('.js')) __dirname = __dirname.substring(0, __dirname.lastIndexOf('/') + 1)
const COMMAND = `aplay -q ${__dirname}/beep.wav`

/**
 * Make a beep,
 * The function is not async to be faster (detach the beep ASAP),
 * and never throw errors.
 * 
 * This way, the function will never raise problems on runtime. 
 * 
 * Note: the `play` command must be installed
 * @param beep?{string} optional, whitespace means silence. Example '. . ...' or 'a a a bbb' 
 */
export function beep(song = '.') {
  const fn = async song => {
    try {
      await sleep(100)
      for (let c of song.split('')) {
        if (c !== ' ') {
          try { await execute(COMMAND) } catch (err) { console.error(err) }
          await sleep(100)
        } else await sleep(200)
      }
    } catch (err) { console.log(err) }
  }
  fn(song).catch(err => { })
}
