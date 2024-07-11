import { expect, test } from '@jest/globals'
import DiscInterface from '../../src/entity/discInterface'
import { Disc } from '../../src/entity/impl/disc'

test('test create disc', () => {
  const disc: DiscInterface = new Disc(1)
  expect(disc.width).toBe(1)
})

test('test a disc can hold another disc or not', () => {
  const disc1: DiscInterface = new Disc(1)
  const disc2: DiscInterface = new Disc(2)
  expect(disc2.canHold(disc1)).toBeTruthy()
  expect(disc1.canHold(disc2)).toBeFalsy()
})
