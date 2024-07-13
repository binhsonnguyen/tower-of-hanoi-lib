import GameInterface from '../gameInterface'
import TowerInterface from '../towerInterface'
import { Disc } from './disc'
import Tower from './tower'
import IllegalArgumentError from '../illegalArgumentError'
import DiscInterface from '../discInterface'


const defaultGameOptions: GameOptions = {
  totalTowers: 3,
  totalDiscs: 3
}

export type GameOptions = {
  totalTowers: number,
  totalDiscs: number
}

export class Game implements GameInterface {
  private readonly _towers: Array<TowerInterface>
  private readonly _options: GameOptions

  constructor (options: Partial<GameOptions> = {}) {
    this._options = {...defaultGameOptions, ...options}

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

  availableTowers (disc: DiscInterface): Array<number> {
    return this._towers
      .map((value, index) => {
        return {
          originIndex: index, upperDisc: value.upperDisc
        }
      })
      .filter(item => !item.upperDisc || item.upperDisc.width > disc.width)
      .map(item => item.originIndex)
  }

  getTower (number: number): TowerInterface {
    if (number < 0 || number >= this._options.totalTowers) {
      throw new IllegalArgumentError()
    }
    return this._towers[number]
  }

  moveDisc (from: number, to: number): void {
    this.getTower(to).put(this.getTower(from).pop())
  }

  won (): boolean {
    if (!!this.getTower(0).upperDisc) {
      return false
    }
    const towersThatHaveDisc = this._towers.filter(tower => !!tower.upperDisc)
    return towersThatHaveDisc.length === 1
  }

}