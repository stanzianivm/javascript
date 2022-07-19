// assign my age to the variable `myAge`
var myAge = 32;

// assign value of `2` to variable `earlyYears`
var earlyYears = 2;

// multiply `earlyYears` by `25` to account for early growth rate
earlyYears *= 25;

// subtract `2` years from `myAge` and assign to `laterYears` to account for growth rate of a
// cat after the first two years
var laterYears = myAge -2;

laterYears *= 4;

// add value of `earlyYears` and `laterYears` for the total age and assign to `myAgeInCatYears`
var myAgeInCatYears = earlyYears + laterYears;

// assign the value of my name to the variable `myName`
var myName = 'Victor';

console.log('My name is ' + myName + '. I am ' + myAge
+ ' years old in human years which is ' + myAgeInCatYears
+ ' years old in cat years.');