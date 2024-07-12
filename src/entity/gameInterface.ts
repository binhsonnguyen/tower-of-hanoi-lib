import TowerInterface from './towerInterface'
import DiscInterface from './discInterface'

export default interface GameInterface {
  towers: Array<TowerInterface>

  getTower (number: number): TowerInterface

  moveDisc (from: number, to: number): void

  won (): boolean

  availableTowers (disc: DiscInterface): Array<number>
}