import { expect, test } from '@jest/globals'
import GameInterface from '../../src/entity/gameInterface'
import { Game } from '../../src/entity/impl/game'

test('test create a new game', () => {
  const game: GameInterface = new Game(3)
  expect(game.towers.length).toBe(3)
})
