import { 
  compact, 
  first, 
  last, 
  sample,
  unique 
} from './array'
import { mockRandomForEach } from 'jest-mock-random'

describe('compact', () => {
  describe('for an empty array', () => {
    const array: Array<any> = []

    it('is an empty array', () => {
      expect(compact(array)).toEqual(array)
    })
  })

  describe('for an array with nulls and undefined values', () => {
    const array = [1, 2, 3, null, undefined]

    it('strips out null or undefined values', () => {
      expect(compact(array)).toEqual([1, 2, 3])
    })
  })
})

describe('first', () => {
  describe('for an empty array', () => {
    const array: Array<any> = []

    it('returns null', () => {
      expect(first(array)).toEqual(null)
    })
  })

  describe('for an array with at least one value', () => {
    const array = [1,2,3]

    it('returns the first element', () => {
      expect(first(array)).toEqual(1)
    })
  })
})

describe('last', () => {
  describe('for an empty array', () => {
    const array: Array<any> = []

    it('returns null', () => {
      expect(last(array)).toEqual(null)
    })
  })

  describe('for an array with at least one value', () => {
    const array = [1, 2, 3]

    it('returns the last element', () => {
      expect(last(array)).toEqual(3)
    })
  })
})

describe('sample', () => {
  describe('for an empty array', () => {
    const array: Array<any> = []

    it('returns null', () => {
      expect(sample(array)).toEqual(null)
    })
  })

  describe('for an array with at least one value', () => {
    const array = [1, 2, 3]
    mockRandomForEach([0.1, 0.5, 0.9])

    it('returns a random element', () => {
      expect(sample(array)).toEqual(1)
      expect(sample(array)).toEqual(2)
      expect(sample(array)).toEqual(3)
    })
  })
})

describe('unique', () => {
  describe('for an empty array', () => {
    const array: Array<any> = []

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

