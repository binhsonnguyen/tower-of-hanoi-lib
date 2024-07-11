export default class IllegalDiscError extends Error {
  constructor (message?: string) {
    super(`IllegalDiscError:  ${message}`)
    this.name = 'IllegalDiscError'
  }
}
