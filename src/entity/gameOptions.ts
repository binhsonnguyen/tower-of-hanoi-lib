import IllegalOptionError from './illegalOptionError'

export default class GameOptions {
  private readonly _towersCount: number
  private readonly _discsCount: number

  constructor (towersCount: number = 3, discsCount: number = 16) {
    if (towersCount <= 0 || discsCount <= 0) {
      throw new IllegalOptionError()
    }
    this._towersCount = towersCount
    this._discsCount = discsCount
  }

  get towersCount (): number {
    return this._towersCount
  }

  get discsCount (): number {
    return this._discsCount
  }
}
