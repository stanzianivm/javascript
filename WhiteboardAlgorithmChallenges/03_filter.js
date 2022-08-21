// Remove Odd Numbers From an Array

// Challenge
  // Create a function that takes an array of numbers and returns only the even values.
  // The function should return an array containing only even numbers

// Examples
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 3, 4, 6, 8, 10]
  // [21, 26, 28, 29] -> [26, 28]

function evensOnly(arr) {
    return arr.filter(num => num % 2 == 0);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = [21, 26, 28, 29];

evensOnly(arr);
evensOnly(arr2);