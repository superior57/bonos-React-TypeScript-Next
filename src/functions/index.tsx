export function pickRandom(items) {
  let keys = Object.keys(items)
  let min = 0
  let max = keys.length
  let index = Math.floor(Math.random() * (max - min)) + min
  return items[index]
}
