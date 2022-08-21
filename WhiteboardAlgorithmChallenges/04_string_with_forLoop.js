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
    var finalString = '';

    if (num <= 0) {
        return finalString;
    }

    for (let index = 0; index < num; index++) {
        finalString += str;
    }
    return finalString
}

// other solution
// function repeatString(str, num) {
//     let arr = [];
//     for (let index = 0; index < num; index++) {
//         arr.push(str);
//     }
//     return arr.join('');
// }

repeatString('car', 4);
repeatString('bar', 3);
repeatString('bar', 0);