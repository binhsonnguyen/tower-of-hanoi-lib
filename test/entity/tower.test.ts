import { expect, test } from '@jest/globals'
import Tower from '../../src/entity/impl/tower'
import { Disc } from '../../src/entity/impl/disc'
import DiscInterface from '../../src/entity/discInterface'
import TowerInterface from '../../src/entity/towerInterface'
import EmptyTowerError from '../../src/entity/emptyTowerError'
import IllegalDiscError from '../../src/entity/illegalDiscError'

test('test create tower', () => {
  const tower: Tower = new Tower()
  expect(tower.upperDisc).toBeUndefined()
})

test('test check tower can put a disc or not', () => {
  const smallDisc: DiscInterface = new Disc(1)
  const mediumDisc: DiscInterface = new Disc(2)
  const largeDisc: DiscInterface = new Disc(3)

  const tower: TowerInterface = new Tower()
  expect(tower.canPut(smallDisc)).toBe(true)
  expect(tower.canPut(mediumDisc)).toBe(true)
  expect(tower.canPut(largeDisc)).toBe(true)

  tower.put(mediumDisc)
  expect(tower.canPut(smallDisc)).toBe(true)
  expect(tower.canPut(mediumDisc)).toBe(true)
  expect(tower.canPut(largeDisc)).toBe(false)
})

test('test put disc', () => {
  const smallDisc: DiscInterface = new Disc(1)
  const mediumDisc: DiscInterface = new Disc(2)
  const largeDisc: DiscInterface = new Disc(3)

  const tower: TowerInterface = new Tower()
  tower.put(mediumDisc)
  expect(tower.upperDisc).toBe(mediumDisc)

  tower.put(smallDisc)
  expect(tower.upperDisc).toBe(smallDisc)

  expect(() => tower.put(largeDisc)).toThrow(IllegalDiscError)
})

test('test pop disc from tower', () => {
  const smallDisc: DiscInterface = new Disc(1)
  const mediumDisc: DiscInterface = new Disc(2)
  const largeDisc: DiscInterface = new Disc(3)

  const tower: TowerInterface = new Tower()

  tower.put(mediumDisc)
  expect(tower.pop()).toBe(mediumDisc)
  expect(tower.upperDisc).toBeUndefined()

  tower.put(mediumDisc)
  tower.put(smallDisc)
  expect(tower.pop()).toBe(smallDisc)
  expect(tower.upperDisc).toBe(mediumDisc)
  expect(tower.pop()).toBe(mediumDisc)

  expect(() => tower.pop()).toThrow(EmptyTowerError)
})
