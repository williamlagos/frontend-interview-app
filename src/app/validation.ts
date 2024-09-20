import { InputValues } from "./types"

const validateEmail = (email: string) => (
  !email.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) ? 'The field was filled with an invalid e-mail' : ''
)

const validateName = (name: string) => name.length < 3 ? 'The name was filled with too few characters' : ''

const validateAge = (age: number) => age < 18 ? 'The age must be 18 or older' : ''

/**
 * Main validator function for every value in the step. A switch makes sure that a validator is called only when needed
 * @param {InputValues} inputValues - data collected from the step, to be verified in this function
 * @param {boolean} required - flag for checking or not for empty input on entries
 */
export const validateValues = (inputValues: InputValues, required: boolean): string => {
  let value = ''
  const values = Object.values(inputValues)
  if (required && values.length === 0) {
    value = 'The field(s) is(are) empty'
  } else {
    values.forEach(({ type: inputType, value: inputValue }) => {
      switch (inputType) {
        case 'text':
          value = validateName(inputValue)
          break
        case 'email':
          value = validateEmail(inputValue)
          break
        case 'number':
          value = validateAge(inputValue)
          break
      }
    })
  }
  return value
}
