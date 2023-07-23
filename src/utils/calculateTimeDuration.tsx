export function calculateTimeDuration(startTime: number): string {
  const currentTimeInSecons = (new Date().getTime() - startTime) / 1000
  const hours = Math.floor(currentTimeInSecons / 3600)
  const min = Math.floor((currentTimeInSecons - hours * 3600) / 60)
  const secons = Math.floor(currentTimeInSecons - hours * 3600 - min * 60)

  return min === 0
    ? `0 : ${addPad(secons)}`
    : hours === 0
    ? `${addPad(min)} : ${addPad(secons)}`
    : `${addPad(hours)} : ${addPad(min)} : ${addPad(secons)}`
}

function addPad(number: number): string {
  return number.toString().padStart(2, '0')
}
