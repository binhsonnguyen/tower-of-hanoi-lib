import { expect, test } from '@jest/globals'
import GameOptions from '../../src/entity/gameOptions'
import IllegalOptionError from '../../src/entity/illegalOptionError'

test('test create a new game option', () => {
  let gameOptions: GameOptions = new GameOptions()
  expect(gameOptions.towersCount).toBe(3)
  expect(gameOptions.discsCount).toBe(16)

  gameOptions = new GameOptions(5, 64)
  expect(gameOptions.towersCount).toBe(5)
  expect(gameOptions.discsCount).toBe(64)

  expect(() => new GameOptions(0, 16)).toThrow(IllegalOptionError)
  expect(() => new GameOptions(3, 0)).toThrow(IllegalOptionError)
})
