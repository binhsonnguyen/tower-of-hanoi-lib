import GameInterface from '../gameInterface'
import Tower from './tower'

export class Game implements GameInterface {
  constructor (towersCount: number) {

  }

  get towers (): Tower[] {
    return []
  }

}