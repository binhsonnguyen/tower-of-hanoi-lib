import {Disc} from "../disc";

export class DiscImpl implements Disc {
    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    private _width: number;

    constructor(width: number) {
        this._width = width;
    }
}