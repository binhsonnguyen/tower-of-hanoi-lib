import {DiscImpl} from "./impl/discImpl";

export class DiscFactory {
    static create(width: number) {
        return new DiscImpl(width);
    }
}