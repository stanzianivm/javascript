// Repeat a String

// Challenge
  // write a function that takes two arguments, a string and a number.
  // The function should return a single string that contains the original string,
  // repeated the number of times specified by the second argument,
  // or an empty string if the number is negative.

// Examples
  // 'car', 4 -> 'carcarcarcar'
  // 'bar', 3 -> 'barbarbar'

  function repeatString(str, num) {
    let finalString = '';

    if (num <= 0) {
        return finalString;
    }

    while (num > 0) {
        finalString += str;
      	num--;
    }

    return finalString
}

repeatString('car', 4);
repeatString('bar', 3);
repeatString('bar', 0);