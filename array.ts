export function compact<T>(array: Array<T>) {
  return array.filter(item => !!item)
}

export function unique<T>(array: Array<T>) {
  return [...new Set(array)]
}