// Reverse a String

// Challenge
  // Reverse the provided string.
  // You may need to turn the string into an array before you can reverse it.
  // Your result must be a string.

// Examples
  // 'car' -> 'rac'
  // 'bar' -> 'rab'

// Tools
  // for loops
    // http://bit.ly/for-loop-javascript

function revString(str) {
    let reverseString = '';

    for (var i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString;
}

revString('car');
revString('bar');

// using FOROF
function revStringWithForOf(str) {
    let revString = '';
    for (const iterator of str) {
            revString = iterator + revString;
    }
    return revString;
}


revStringWithForOf('car');
revStringWithForOf('bar');