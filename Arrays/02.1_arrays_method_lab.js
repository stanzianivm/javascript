// Review arrays methods
// Concat method - Join two or more arrays
// Reverse method - reverse order of elements
// Sort method- sort alpha numerix
// Slice method - returns but does not delete a section

// To check: map, filter, find

// Practice
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Challenge
// Build another array and add the two together
var colorsTwo = ['black', 'white', 'brown', 'purple'];

var allColors = colors.concat(colorsTwo);
console.log(allColors);

// Challenge
// Add another array and use the concat method in two ways to add them together
var colorThree = ['red', 'white', 'blue'];

var moreColors = colors.concat(colorsTwo, colorThree);
console.log(moreColors);

// Challenge
// Reverse all the elements in the allColors array
// Sort all the elements in the allColors array by alphabetical order
var reverseArray = allColors.reverse();
var sortArray = allColors.sort();
console.log('reverse', reverseArray);
console.log('sort', sortArray);

// Practice
var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];

// Challenge
// Create var winter and fill woth winter values
// Create var summer fill with summer values

var winter = weather.slice(0, 5);
var summer = weather.slice(5);

console.log(winter);
console.log(summer);

// Challenge
// Create same variables using negative numberse

var winter = weather.slice(-8, -3);
var summer = weather.slice(-3);