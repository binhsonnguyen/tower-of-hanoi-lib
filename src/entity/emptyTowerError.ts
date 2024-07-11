export default class EmptyTowerError extends Error {
  constructor (message?: string) {
    super(`EmptyTowerError:  ${message}`)
    this.name = 'EmptyTowerError'
  }
}
