// In the following lab you will see how we can use the Chrome Developer tools to practice our JavaScript

var transportation = 'car';

// invalid variable names
// var 1stPet = 'Bear'; // starts with number
// var var = 'variables'; // keyword/reserved word
// var first name = 'John'; // space between words

// valid variable names
var fruit = 'apple'; // stars with upper/lower case letter
var $money = 5; // starts with $
var _weather = 'hot'; // begins with underscore

// camelCase examples
var lunchCostPerStudent;
var homeRuns;
var userExperience;

// human readability - less code doesn't always mean better code - which is more human readable?
var x = 25;
var applesFromTree = 25;

// until a variable is assigned a value it is uninitialized and its value is undefined
var transporation; // undefined
var transporation = 'car'; // 'car'

// dynamic typing
var transporation = 'car';
var passLieDetector = false;
var groceryBill = 74;
typeof transportation; // "string"
typeof passLieDetector; // "boolean"
typeof groceryBill; // "number"
