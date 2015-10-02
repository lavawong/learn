"use strict";
import CompassPt from "./compassPt.js"
class Drunk {
    constructor(name) {
        this.name = name;

    }

    move(field, time = 1){
        var pt;
        if (field.getDrunk() != this) {
            return Error('Drunk error')
        }
        for (let i=0; i<time; i++) {
            pt = new CompassPt();
            field.move(pt, i);
        }
    }
}