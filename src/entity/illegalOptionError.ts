export default class IllegalOptionError extends Error {
  constructor (message?: string) {
    super(`IllegalOptionError:  ${message}`)
    this.name = 'IllegalOptionError'
  }
}
