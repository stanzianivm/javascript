// assign and array with four string elements to the variable `randomBodyParts`
var randomBodyParts = ['Face', 'Nose', 'Hair', 'Chin'];

// assign and array with four string elements to the variable `randomAdjectives`
var randomAdjectives = ['Smelly', 'Boring', 'Stupid', 'Lazy'];

// assign and array with five string elements to the variable `randomWords`
var randomWords = ['Fly', 'Marmot', 'Stick', 'Dog', 'Rat'];

// choose a random item from `randomBodyParts` array and assign to `randomBodyPart`
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];

// choose a random item from `randomAdjectives` array and assign to `randomAdjective`
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

// choose a random item from `randomWords` array and assign to `randomWord`
var randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log("Your " + randomBodyPart + " is like a " 
+ randomAdjective + " " + randomWord + "!!!");