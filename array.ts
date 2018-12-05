export function compact<T>(array: Array<T>) {
  return array.filter(item => !!item)
}

export function first<T>(array: Array<T>) {
  if (array.length < 1) {
    return null
  }

  return array[0]
}

export function last<T>(array: Array<T>) {
  if (array.length < 1) {
    return null
  }

  return array[array.length - 1]
}

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
}

export function sample<T>(array: Array<T>) {
  if (array.length < 1) {
    return null
  }

  return array[getRandomIntInclusive(0, array.length - 1)]
}

export function unique<T>(array: Array<T>) {
  return [...new Set(array)]
}