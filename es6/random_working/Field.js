"use strict";
class Field {
    constructor(drunk, loc) {
        this.drunk = drunk;
        this.loc = loc;
    }

    move(cp, dist) {
        let oldLoc = this.loc;
        let xc, yc;
        let coords = cp.move(dist);
        xc = coords.x, yc = coords.y;
        this.loc = oldLoc.move(xc, yc);
    }

    getLoc() {
        return this.loc;
    }

    getDrunk() {
        return this.drunk;
    }
}