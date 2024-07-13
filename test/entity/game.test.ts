import { expect, test } from '@jest/globals'
import GameInterface from '../../src/entity/gameInterface'
import { Game, GameOptions } from '../../src/entity/impl/game'
import EmptyTowerError from '../../src/entity/emptyTowerError'
import IllegalArgumentError from '../../src/entity/illegalArgumentError'
import { Disc } from '../../src/entity/impl/disc'

test('test create a new game', () => {
  const gameOptions: GameOptions = {
    totalTowers: 3,
    totalDiscs: 16
  }
  const game: GameInterface = new Game(gameOptions)
  expect(game.towers.length).toBe(3)
})

test('test game create discs for first tower', () => {
  const gameOptions: GameOptions = {
    totalTowers: 3,
    totalDiscs: 16
  }
  const game: GameInterface = new Game(gameOptions)
  const firstTower = game.towers[0]

  for (let i = 1; i <= gameOptions.totalDiscs; i++) {
    expect(firstTower.pop()?.width).toBe(i)
  }
  expect(() => firstTower.pop()).toThrow(EmptyTowerError)
})

test('test game return a specific tower', () => {
  const gameOptions: GameOptions = {
    totalTowers: 3,
    totalDiscs: 16
  }
  const game: GameInterface = new Game(gameOptions)
  expect(game.getTower(0)).toBeDefined()
  expect(game.getTower(1)).toBeDefined()
  expect(game.getTower(2)).toBeDefined()
  expect(() => game.getTower(3)).toThrow(IllegalArgumentError)
  expect(() => game.getTower(-1)).toThrow(IllegalArgumentError)

})

test('test game move disc from a tower to another', () => {
  const gameOptions: GameOptions = {
    totalTowers: 3,
    totalDiscs: 16
  }
  const game: GameInterface = new Game(gameOptions)

  const from = 0
  const to = 2
  game.moveDisc(from, to)
  expect(game.getTower(from).upperDisc?.width).toBe(2)
  expect(game.getTower(to).upperDisc?.width).toBe(1)
})

test('test game won', () => {
  let game: GameInterface = new Game({
    totalTowers: 2,
    totalDiscs: 1
  })
  expect(game.won()).toBe(false)
  game.moveDisc(0, 1)
  expect(game.won()).toBe(true)

  game = new Game({
    totalTowers: 3,
    totalDiscs: 2
  })
  game.moveDisc(0, 1)
  game.moveDisc(0, 2)
  game.moveDisc(1, 2)
  expect(game.won()).toBe(true)

  game = new Game({
    totalTowers: 3,
    totalDiscs: 2
  })
  game.moveDisc(0, 2)
  game.moveDisc(0, 1)
  game.moveDisc(2, 1)
  expect(game.won()).toBe(true)
})

test('test game tell which towers are moveable a disc onto', () => {
  let game: GameInterface = new Game({
    totalTowers: 2,
    totalDiscs: 1
  })
  expect(game.availableTowers(new Disc(1))).toEqual([1])

  game = new Game({
    totalTowers: 3,
    totalDiscs: 1
  })
  expect(game.availableTowers(new Disc(1))).toEqual([1, 2])

  game = new Game({
    totalTowers: 5,
    totalDiscs: 3
  })
  game.moveDisc(0, 2)
  expect(game.availableTowers(new Disc(2))).toEqual([1, 3, 4])
})
