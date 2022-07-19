// function() {}
// keyword function
// function name or anonymous
// code block
// called or invoke
// parameters or arguments

// practice
// create a new function, this return a string
// function goodMorningNeighbor() {
//     return 'Good morning, neighbor!';
// }

// // call function goodMorningNeighbor
// var morning = goodMorningNeighbor();
// console.log(morning);

// // practice
// function goodEveningNeighbor() {
//     return 'Good evening neighbor, thanks for everything!';
// }

// var evening = goodEveningNeighbor();
// console.log(evening);

// Challenge
// rewrite both function including a parameter and argument for name in both
// in the second function 'everything' with a parameter and argument naming a task

function goodMorningNeighbor(name) {
    return 'Good morning, neighbor ' + name + '!';
}

var mornignWithParameters = goodMorningNeighbor('Enzo');
console.log(mornignWithParameters);

function goodEveningNeighbor(name, task) {
    return 'Good evening,' + name + ' thanks for ' + task + '!';
}

var eveningWithParameters = goodEveningNeighbor('Enzo', 'taking the ball');
console.log(eveningWithParameters);