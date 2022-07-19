// Challenge
// Build a person with a object literal notation
// Use three property values consisting of a string, number and boolean

var personLiteralNotatios = {
    name: "Enzo",
    aye: 20,
    adult: true
};

console.log(personLiteralNotatios);

// Challenge
// Build an object with object literal notation
// Use dot notation to add four properties and values
var pizza = {};

pizza.crust = 'wheat';
pizza.sauce = 'marianara';
pizza.cheese = 'mozzarella';
pizza.toppings = 'cheese, pepperoni, olives, mushrooms';

console.log(pizza['cheese']);

// Challenge
// Add properties and values to an object with bracket notation
// Use a boolean, string and number

const personBracketNotation = {};
personBracketNotation['adult'] = true;
personBracketNotation['fullNamber'] = 'Julian Fernandez';
personBracketNotation['age'] = 31;
// personBracketNotation = 'pepe';

console.log(personBracketNotation.adult);