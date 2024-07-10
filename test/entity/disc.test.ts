import {expect, test} from "@jest/globals";
import {DiscFactory} from "../../src/entity/discFactory";
import {Disc} from "../../src/entity/disc";

test('test create disc', () => {
    const disc: Disc = DiscFactory.create(1);
    expect(disc.width).toBe(1);
});