// Review
// functional programming
// pillar of JavaSCript
// Functions are values and can be passed other functions as arguments
// higher order functions, pure functions

var weather = [72, 84, 56, 92, 23, 47, 85, 72, 54];

var goOutSide = [];

// Practice
// filter method
// pass a function to filter methos and return an array of all elements that return a value of true

goOutSide = weather.filter(checkWeather)

function checkWeather(element){
    return element > 70;
}

console.log(goOutSide);

// Other way

goOutSide = weather.filter(function(element){
    return element > 70;
});

console.log(goOutSide);

// practice
var forecast = [
    {day: 'Monday', sun: true},
    {day: 'Tuesdar', sun: false},
    {day: 'Wednesday', sun: false},
    {day: 'Thursday', sun: true},
    {day: 'Friday', sun: false},
    {day: 'Saturday', sun: true},
    {day: 'Sunday', sun: false}
];

var sunnyDays = forecast.filter(function(element) {
    return element.sun;
});

sunnyDays;