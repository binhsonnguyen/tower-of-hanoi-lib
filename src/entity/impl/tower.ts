import DiscInterface from '../discInterface'
import TowerInterface from '../towerInterface'
import Stack from '@nguyenbinhson/js-common-data-structures/dist/stack'
import Maybe from '@nguyenbinhson/js-common-data-structures/dist/maybe'
import IllegalDiscError from '../illegalDiscError'
import UndefinedDiscError from '../undefinedDiscError'
import EmptyTowerError from '../emptyTowerError'

export default class Tower implements TowerInterface {
  private readonly _discsStack = new Stack<DiscInterface>

  get upperDisc (): Maybe<DiscInterface> {
    return this._discsStack.peek
  }

  pop (): DiscInterface {
    if (this._discsStack.empty()) {
      throw new EmptyTowerError()
    }
    const disc: Maybe<DiscInterface> = this._discsStack.pop()
    if (!disc) {
      throw new UndefinedDiscError()
    }
    return disc
  }

  canPut (disc: DiscInterface): boolean {
    if (!this.upperDisc) {
      return true
    }
    return this.upperDisc.canHold(disc)
  }

  put (disc: DiscInterface) {
    if (!this.canPut(disc)) {
      throw new IllegalDiscError()
    }
    this._discsStack.push(disc)
  }
}
