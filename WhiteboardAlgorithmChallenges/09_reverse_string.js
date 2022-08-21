// Reverse a String

// Challenge
  // Reverse the provided string.
  // You may need to turn the string into an array before you can reverse it.
  // Your result must be a string.

// Examples
  // 'car' -> 'rac'
  // 'bar' -> 'rab'

function strReverse(str) {
    return str.split('').reverse().join('');
}

// using spread
function strReverseWithSpread(str) {
  return [...str].reverse().join('');
}

strReverse('car');
strReverse('bar');
strReverseWithSpread('car');
strReverseWithSpread('bar');