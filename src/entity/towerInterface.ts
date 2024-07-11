import DiscInterface from './discInterface'
import Maybe from '@nguyenbinhson/js-common-data-structures/dist/maybe'

export default interface TowerInterface {
  upperDisc: Maybe<DiscInterface>;

  put (disc: DiscInterface): void

  canPut (disc: DiscInterface): boolean

  pop (): DiscInterface
}
