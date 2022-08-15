// Review
// map
// higher order function - can receive another function as an argument
// does not delete but transforms each element in a new array

// practice

var numbers = [2, 4, 5, 3];

var numbersMoreOne = numbers.map(function (element) {
    return element * 2;
}).map(function(element){
   return element + 1;
});

numbersMoreOne;

// challenge
// change an array of greetings to all upper case words
// save the first word in the array to a variable

var greeting = ['hi', 'hello', 'hey', 'thanks'];

var greetingUpperCase = greeting.map(function(element){
    return element.toUpperCase();
});

// get the first element of the array
greetingUpperCase.shift();