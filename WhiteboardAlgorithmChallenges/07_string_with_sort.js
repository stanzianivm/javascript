// Alphabetical Order

// Challenge
  // Create a function that takes a string and returns a string with its letters
  // in alphabetical order.

// Examples
  // "hello" ➞ "olleh"
  // "goobye" ➞ "eyboog"
  // "now" ➞ "won"
  // "javascript" ➞ "aacijprstv"

// Approach 1 - // if statement / for loop

// Tools
  // String.prototype.split()
    // http://bit.ly/string-split
  // Array.prototype.sort()
    // http://bit.ly/array-sort
  // Array.prototype.join()
    // http://bit.ly/array-join

function alphaOrder(str) {
    return str.split('').sort().join('');
}

// Solution with "Spread operator"
function alphaOrderWithSpreadOperator(str) {
    return [...str].sort().join('');
}

alphaOrderWithSpreadOperator('olleh');