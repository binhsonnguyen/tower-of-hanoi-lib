import GameInterface from '../gameInterface'
import TowerInterface from '../towerInterface'

export class Game implements GameInterface {
  private readonly _towers: Array<TowerInterface>

  constructor (towersCount: number) {
    this._towers = new Array<TowerInterface>(towersCount)
  }

  get towers (): TowerInterface[] {
    return this._towers.map(value => value)
  }

}