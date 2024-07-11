import TowerInterface from './towerInterface'

export default interface GameInterface {
  towers: Array<TowerInterface>

  getTower (number: number): TowerInterface

  moveDisc (from: number, to: number): void
}