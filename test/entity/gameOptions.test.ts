import { expect, test } from '@jest/globals'
import GameOptions from '../../src/entity/gameOptions'
import IllegalArgumentError from '../../src/entity/illegalArgumentError'

test('test create a new game option', () => {
  let gameOptions: GameOptions = new GameOptions()
  expect(gameOptions.totalTowers).toBe(3)
  expect(gameOptions.totalDiscs).toBe(16)

  gameOptions = new GameOptions(5, 64)
  expect(gameOptions.totalTowers).toBe(5)
  expect(gameOptions.totalDiscs).toBe(64)

  expect(() => new GameOptions(0, 16)).toThrow(IllegalArgumentError)
  expect(() => new GameOptions(3, 0)).toThrow(IllegalArgumentError)
})
