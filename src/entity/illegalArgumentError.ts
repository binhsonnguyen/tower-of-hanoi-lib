export default class IllegalArgumentError extends Error {
  constructor (message?: string) {
    super(`IllegalArgumentError:  ${message}`)
    this.name = 'IllegalArgumentError'
  }
}
