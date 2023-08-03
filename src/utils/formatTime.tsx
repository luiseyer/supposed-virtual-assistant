export function formatTime(time: number): string {
  const secs = time / 1000

  const h = Math.floor(secs / 3600)
  const m = Math.floor((secs - h * 3600) / 60)
  const s = Math.floor(secs - h * 3600 - m * 60)

  return m === 0
    ? `0 : ${addPad(s)}`
    : h === 0
    ? `${addPad(m)} : ${addPad(s)}`
    : `${addPad(h)} : ${addPad(m)} : ${addPad(s)}`
}

function addPad(number: number): string {
  return number.toString().padStart(2, '0')
}
