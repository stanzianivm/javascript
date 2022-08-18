// challenge
// search  max string in the parameter

// declare function and parameter
function maxWord(str) {
    // declare variable and create an array of words with our split methos
    var words = str.split(' ');
    // declare a variable for our longest word. Set initial value yo zero.
    var biggestWord = 0;
    // create a for loop to iterate through array words
    for (let index = 0; index < words.length; index++) {
        // create a conditional if statement to compare current word length with previous biggest word
        if (words[index].length > biggestWord) {
            // assign a new value to biggest word
            biggestWord = words[index].length;
        }
    }
    return biggestWord;
}

maxWord('my name is Victor');

function maxWordTwo(str) {
    var words = str.split(' ');
    var biggestWord = '';
    for (let index = 0; index < words.length; index++) {
        if (biggestWord.length < words[index].length){
            biggestWord = words[index];
        }
    }
    str = biggestWord;
    return biggestWord.length;
}