// Review
// Evaluate conditions
// Like a path
// ==, ===
// <, >
// Truthy and falsey
// &&, ||
// if, if else, if else if

// Challenge
// Change the code to the following expressions to make them true}

// (5 > 7) false
(5 < 7)

// (7 === '7') false
(7 == '')

// (7 === 'seven') false
(7 !== 'seven')

// (false) false
(true)

// Challenge
// Use logical operators && and || to show four differents code examples for each}
((5 > 4) && (8 > 3))
((3 > 2) && (2 > 5))
((3 < 2) && (2 < 5))
((3 < 2) && (2 > 5))

((5 > 4) || (8 > 3))
((3 > 2) || (2 > 5))
((3 < 2) || (2 < 5))
((3 < 2) || (2 > 5))

// Challenge
// Create an if, else, else if statements
// use at least one if, two else if and one else statements
// use at least one logical operator
// suggestion weather

var temp = 70;
var rainy = true;

if (temp > 90){
    console.log('I am going swimming');
} else if (temp > 80){
    console.log('Time for a tan');
} else if (temp > 70) {
    console.log('I am going for a walk');
} else if ((temp > 70) && (rainy)) {
    console.log('I am going to grab my umbrella');
} else {
    console.log('I am staying home!');
}