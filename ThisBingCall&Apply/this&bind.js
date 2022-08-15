// review this & bind
// 'this' is defined by creation context
// in context 'this' is set to the object method is called on
// bind
// helps 'this' find context
// pass object as argument to bind method to find desired continue

// practice

let person1 = {
    name: 'Victor'
}

let person2 = {
    name: 'Pablo'
}

function namer() {
    return this.name;
}

// challenge
// use bind method twice to give 'this' the context of person1 and person2

namer.bind(person1)();
namer.bind(person2)();

let number = {
    x: 24,
    y: 22
}

let count = function () {
    console.log(this.x + this.y);
}

let boundFunc = count.bind(number);
boundFunc();
