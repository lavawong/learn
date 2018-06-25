'use strict';

var obj = {
  i: 10,
  b: () => {console.log(this.i, this)},
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}


class Obj extends Object {
    i = 10;
	constructor(...args){
        super(...args);
    }
    b = ()=>{
		console.log(this.i, this);
	};
	c(){
		console.log(this.i, this);
	}
}

let obj1 = new Obj();
obj1.b();
let obj2 = new Obj();
obj2.b.bind(obj1)();
