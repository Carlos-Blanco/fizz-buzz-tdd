import { fizzbuzz } from "../src/fizzbuzz"
import { describe, expect, it } from "vitest"

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('it should throw if parameter is not a number', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('it should return 1 if parameter is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('it should return 2 if parameter is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('it should return fizz if parameter is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('it should return fizz if parameter is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('it should return buzz if parameter is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
    expect(fizzbuzz(100)).toBe('buzz')
  })

  it('it should return fizzbuzz if parameter is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(90)).toBe('fizzbuzz')
  })

})