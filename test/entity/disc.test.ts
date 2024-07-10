import {expect, test} from "@jest/globals";
import {DiscFactory} from "../../src/entity/discFactory";
import {Disc} from "../../src/entity/disc";

test('test create disc', () => {
    const disc: Disc = DiscFactory.create(1);
    expect(disc.width).toBe(1);
});

test('test a disc can hold another disc or not', () => {
    const disc1: Disc = DiscFactory.create(1);
    const disc2: Disc = DiscFactory.create(2);
    expect(disc2.canHold(disc1)).toBeTruthy();
    expect(disc1.canHold(disc2)).toBeFalsy();
});
