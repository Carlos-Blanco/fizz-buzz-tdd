import { describe, expect, it } from "vitest"

const fizzbuzz = (number) => {
 if (typeof number !== 'number') throw new Error()
}


describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('it should throw if parameter is not a number', () => {
    expect(() => fizzbuzz()).toThrow()
  })

})