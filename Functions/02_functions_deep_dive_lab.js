// review
// function expressions
// anonymous expressions
// IFFEs

// Practice
function knockKnock() {
    return 'Who\'s there?';
}

knockKnock();

// Challenge
// turn knockKnock into an anonymous function within a functions expressions
// call the function

var knockKnock = function knockKnock() {
    return 'Who\'s there?';
}

console.log(knockKnock);

// Inmediately Invoke Functions Expressions
var fullName = (function (name, fullName) {
    return 'The person is: ' + name + ' ' + fullName;
}('Juan', 'Perez'));

console.log(fullName);