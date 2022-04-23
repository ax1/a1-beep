module.exports = { beep }

async function beep(song) {
  const b = await import('./index.js')
  await b.beep(song)
}