import { describe, expect, it } from 'vitest'
import { shuffleChars, shuffleText } from '../../composables/shuffle'

describe('shuffleChars', () => {
  it('should return a string what has the same length as the chars variable', () => {
    const charsLength = 45
    expect(shuffleChars()).toHaveLength(charsLength)
  })

  it('should return string in where all characters are unique', () => {
    const puzzle = shuffleChars()
    const uniqueChars = [...new Set(puzzle)]
    expect(puzzle).toHaveLength(uniqueChars.length)
  })

  it('should return a different string than the original string', () => {
    const chars = 'aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz0123456789'
    expect(shuffleChars()).not.toBe(chars)
  })
})

describe('shuffleText', () => {
  it('should return a text what has the same length as the original text', () => {
    const text = 'Gauranga rrd!'
    expect(shuffleText(text)).toHaveLength(text.length)
  })

  it('should return a different text than the original text', () => {
    const text = 'Gauranga rrd!'
    expect(shuffleText(text)).not.toBe(text)
  })
})
