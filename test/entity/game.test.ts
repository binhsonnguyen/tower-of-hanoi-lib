import { expect, test } from '@jest/globals'
import GameInterface from '../../src/entity/gameInterface'
import { Game } from '../../src/entity/impl/game'
import GameOptions from '../../src/entity/gameOptions'
import EmptyTowerError from '../../src/entity/emptyTowerError'
import IllegalArgumentError from '../../src/entity/illegalArgumentError'

test('test create a new game', () => {
  const gameOptions = new GameOptions(3, 16)
  const game: GameInterface = new Game(gameOptions)
  expect(game.towers.length).toBe(3)
})

test('test game create discs for first tower', () => {
  const gameOptions = new GameOptions(3, 16)
  const game: GameInterface = new Game(gameOptions)
  const firstTower = game.towers[0]

  for (let i = 1; i <= gameOptions.totalDiscs; i++) {
    expect(firstTower.pop()?.width).toBe(i)
  }
  expect(() => firstTower.pop()).toThrow(EmptyTowerError)
})

test('test game return a specific tower', () => {
  const gameOptions = new GameOptions(3, 16)
  const game: GameInterface = new Game(gameOptions)
  expect(game.getTower(0)).toBeDefined()
  expect(game.getTower(1)).toBeDefined()
  expect(game.getTower(2)).toBeDefined()
  expect(() => game.getTower(3)).toThrow(IllegalArgumentError)
  expect(() => game.getTower(-1)).toThrow(IllegalArgumentError)

})

test('test game move disc from a tower to another', () => {
  const gameOptions = new GameOptions(3, 16)
  const game: GameInterface = new Game(gameOptions)

  const from = 0
  const to = 2
  game.moveDisc(from, to)
  expect(game.getTower(from).upperDisc?.width).toBe(2)
  expect(game.getTower(to).upperDisc?.width).toBe(1)
})

test('test game won', () => {
  let game: GameInterface = new Game(new GameOptions(2, 1))
  expect(game.won()).toBe(false)
  game.moveDisc(0, 1)
  expect(game.won()).toBe(true)

  game = new Game(new GameOptions(3, 2))
  game.moveDisc(0, 1)
  game.moveDisc(0, 2)
  game.moveDisc(1, 2)
  expect(game.won()).toBe(true)

  game = new Game(new GameOptions(3, 2))
  game.moveDisc(0, 2)
  game.moveDisc(0, 1)
  game.moveDisc(2, 1)
  expect(game.won()).toBe(true)
})
