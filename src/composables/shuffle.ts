const chars = 'aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz0123456789'

const shuffleChars = () =>
  chars
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')

const shuffleText = (text: string) => {
  const shuffledChars = shuffleChars()
  const textArray = text.split('')

  for (let i = 0; i < textArray.length; i++) {
    const char = textArray[i].toLowerCase()
    const charPosition = chars.indexOf(char)

    if (charPosition === -1) continue

    const replacement = shuffledChars[charPosition]
    textArray[i] = replacement
  }

  return textArray.join('')
}

export { shuffleChars, shuffleText }
