// Name Swap

// Challenge
  // Reverse the provided two strings.

// Examples
  // "Abraham Lincoln" ➞ "Lincoln Abraham"
  // "Hank Aaron" ➞ "Aaron Hank"

// Approach 1 - // Using Built in Functions

// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
  // Array.prototype.reverse()
    // http://bit.ly/array-reverse-method
  // Array.prototype.join()
    // http://bit.ly/array-join

var str = "Abraham Lincoln";
var str2 = "Hank Aaron";

function nameSwap(str) {
    return str.split(' ').reverse().join(' ');
}

nameSwap(str2);

// Name Swap Indices

function nameSwap(str) {
  let arrayStr = str.split(' ');
  return arrayStr[1] + ' ' + arrayStr[0];
}
