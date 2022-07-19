// Array methods review
// push() method adds new items to the end of an array.
// pop() method removes (pops) the last element of an array.
// shift() method removes the first item of an array.
// unshift() method adds new elements to the beginning of an array.

// Practice

var shoppingList = ['apples', 'pizza', 'chicken', 'mushrooms', 'oranges', 'beef'];

// Challenge
// insert 'crackers' at the front of the array and 'grapes' at the end of the array

shoppingList.unshift('crackers');
shoppingList.push('grapes');

console.log(shoppingList);

// Challenge
// Remove an item from the front and the end of the shoppingList

shoppingList.shift();
shoppingList.pop();

console.log(shoppingList);

// Practice
// Capture shift and pop methods

var firstItemSarah = shoppingList.shift();
var lastItemPhil = shoppingList.pop();

console.log(firstItemSarah);
console.log(lastItemPhil);