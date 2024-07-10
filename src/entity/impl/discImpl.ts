import {Disc} from "../disc";

export class DiscImpl implements Disc {
    constructor(width: number) {
        this._width = width;
    }

    private _width: number;

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    canHold(disc: Disc): boolean {
        return this.width >= disc.width;
    }
}
