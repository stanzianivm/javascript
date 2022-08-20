// spread operator review
// ...
// multiple elements in arrays
// multiple elements in functions

// practice
let names = ['Tim', 'Sarah', 'Alex'];

// spread operators
console.log(...names);

// challenge
// create two arrays
// add them together using es5 approach
// add them together using es6 approach

var persons = ['Victor', 'Pablo', 'Julian'];
var players = ['Messi', 'Neymar', 'Maradona'];

// es5
var es5 = persons.concat(players);
es5;

// es6
var es6 = players = ['Messi', 'Neymar', 'Maradona', ...persons];
es6;

// challenge
// create a function that will take 3 parameters
// pass to the function an array with 3 elements using spread operator
// pass those elements to a template string and return the template string

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));