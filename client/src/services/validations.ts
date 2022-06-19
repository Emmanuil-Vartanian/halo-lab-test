import { ERROR_MESSAGE } from 'constants/errorMessage'

export const requiredField = (value, setState) => {
  if (value.length !== 0) {
    return true
  }
  setState(prev => ({ ...prev, error: ERROR_MESSAGE.REQUIRED }))
}

export const onlyLetters = (value, setState) => {
  const letters = /^[A-Za-z]+$/
  if (value.match(letters)) {
    return true
  }
  setState(prev => ({ ...prev, error: ERROR_MESSAGE.ONLY_LETTERS }))
}

export const onlyNumbers = (value, setState) => {
  const numbers = /^\d+$/
  if (value.match(numbers)) {
    return true
  }
  setState(prev => ({ ...prev, error: ERROR_MESSAGE.ONLY_NUMBERS }))
}

export const numberOfCharacters = (value: string, maxNumber: number, setState: (prev) => void) => {
  if (value.length === maxNumber) {
    return true
  }
  setState(prev => ({ ...prev, error: ERROR_MESSAGE.NUMBER_OF_CHARACTERS(maxNumber) }))
}
