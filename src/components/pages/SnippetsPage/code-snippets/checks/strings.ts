/**
 * Checks if input is a string
 *
 *      return input || null
 */
const checkIsString = (input: string): string | null => {
  return typeof input === 'string' ? input : null
}

/**
 * Checks if input is a string and is not empty
 *
 *      return input || null
 */
export const checkIsStringAndNotEmpty = (input: string): string | null => {
  return typeof input === 'string' && input.length > 0 ? input : null
}

/**
 * Checks if input is a string or an array
 *
 *      return boolean
 */
export const checkIsStringOrArray = (input: string | string[]): boolean => {
  return typeof input === 'string' || Array.isArray(input)
}

/**
 * Checks if input is a string and has a hyphen
 *
 *      return boolean || null
 */
export const checkHasHyphen = (input: string): boolean | null => {
  if (typeof input !== 'string') return null

  return input.includes('-')
}

export const stringSnippets = [
  {
    id: 'checkIsString',
    language: 'ts',
    snippet: `/**
    * Checks if input is a string
    *
    *      return input || null
    */
   const checkIsString = (input: string): string | null => {
     return typeof input === 'string' ? input : null
   }`,
  },
  {
    id: 'checkIsStringAndNotEmpty',
    language: 'ts',
    snippet: `/**
    * Checks if input is a string and is not empty
    *
    *      return input || null
    */
   const checkIsStringAndNotEmpty = (input: string): string | null => {
     return typeof input === 'string' && input.length > 0 ? input : null
   }`,
  },

]
