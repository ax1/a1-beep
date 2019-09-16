module.exports = { beep }

const { execute } = require('a1-util')

const COMMAND = 'play -q -n synth 0.5 trapezium C5' // see `man play`. type is one of sine, square, triangle, sawtooth, trapezium, exp, [white]noise, tpdfnoise pinknoise, brownnoise, pluck; default=sine.

/**
 * Make a beep,
 * The function is not async to be faster (detach the beep ASAP),
 * and never throw errors.
 * 
 * This way, the function will never raise problems on runtime. 
 * 
 * Note: the `play` command must be installed
 */
function beep() {
  execute(COMMAND).catch(err => console.log(err))
}