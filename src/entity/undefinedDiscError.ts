export default class UndefinedDiscError extends Error {
  constructor (message?: string) {
    super(`UndefinedDiscError:  ${message}`)
    this.name = 'UndefinedDiscError'
  }
}
