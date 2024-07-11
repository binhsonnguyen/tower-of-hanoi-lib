import GameInterface from '../gameInterface'
import TowerInterface from '../towerInterface'
import GameOptions from '../gameOptions'
import { Disc } from './disc'
import Tower from './tower'

export class Game implements GameInterface {
  private readonly _towers: Array<TowerInterface>
  private readonly _options: GameOptions

  constructor (options: GameOptions) {
    this._options = options

    this._towers = new Array<TowerInterface>(this._options.totalTowers)
    for (let i = 0; i < this._options.totalTowers; i++) {
      this._towers[i] = new Tower()
    }

    const firstTower = this.towers[0]
    for (let size = this._options.totalDiscs; size >= 1; size--) {
      firstTower.put(new Disc(size))
    }
  }

  get towers (): TowerInterface[] {
    return this._towers.map(value => value)
  }

}