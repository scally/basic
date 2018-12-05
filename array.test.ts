import { compact, unique } from './array'

describe('unique', () => {
  describe('for an empty array', () => {
    const array: Array<Number> = []

    it('is an empty array', () => {
      expect(unique(array)).toEqual([])
    })
  })

  describe('for an array with no duplicates', () => {
    const array = [1,2,3]

    it('is unchanged', () => {
      expect(unique(array)).toEqual(array)
    })
  })

  describe('for an array with duplicates', () => {
    const array = [1,1,2,2,3,3]

    it('removes duplicates', () => {
      expect(unique(array)).toEqual([1,2,3])
    })
  })
})

describe('compact', () => {
  describe('for an empty array', () => {
    const array: Array<Number> = []

    it('is an empty array', () => {
      expect(compact(array)).toEqual(array)
    })
  })
})