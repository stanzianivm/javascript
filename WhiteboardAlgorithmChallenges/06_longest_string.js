// Supercalifragilisticexpialidocious

// Challenge
  // Given a string of words return the length of the longest word(s)

// Examples
  // 'Hi, where is the airport?' -> 7
  // 'Thanks for stopping by!' -> 8


// Tools
  // split() method - splits a string into an array
    // http://bit.ly/string-split
  // String.prototype.replace()
    // http://bit.ly/string-replace-method
  // Online Regex Tool
    // http://bit.ly/regular-expressions-javascript
    // https://regex101.com/
    // https://regex101.com/r/c19vza/1

function longestWordLength(str) {
  str.replace(/\W/g, ' ');
  console.log(str);
  let arr = str.split(' ');

  let max = 0;

  for (let index = 0; index < arr.length; index++) {
      if (arr[index].length > max) {
          max = arr[index].length;
      }
  }
  return max;
}


function longestWordLength(str) {
  str.replace(/\W/g, ' ');

  let arr = str.split(' ');

  let word = '';

  for (let index = 0; index < arr.length; index++) {
      if (arr[index] > max) {
        word = arr[index];
      }
  }
  return word.length;
}

longestWordLength('Hi, where is the airport?');
longestWordLength('Thanks for stopping by!');