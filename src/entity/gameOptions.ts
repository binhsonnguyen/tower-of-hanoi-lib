import IllegalArgumentError from './illegalArgumentError'

export default class GameOptions {
  private readonly _totalTowers: number
  private readonly _totalDiscs: number

  constructor (totalTowers: number = 3, totalDiscs: number = 16) {
    if (totalTowers <= 0 || totalDiscs <= 0) {
      throw new IllegalArgumentError()
    }
    this._totalTowers = totalTowers
    this._totalDiscs = totalDiscs
  }

  get totalTowers (): number {
    return this._totalTowers
  }

  get totalDiscs (): number {
    return this._totalDiscs
  }
}
