// Review
// higher order function
// two arguments
// high customatization

// practice

var homeruns = [
    {batter: 12},
    {batter: 21},
    {batter: 28},
    {batter: 42},
    {batter: 31},
    {batter: 22},
    {batter: 17},
    {batter: 16},
    {batter: 5}
];

// challenge
// create an array of 5 elements
// find the sum, product, and largest value

var numbers = [5, 10, 15, 20, 25];

// x accumulator and y currentValue
numbers.reduce(function(x, y) {
    console.log(x, y);
    return x + y;
});

numbers.reduce(function(x, y) {
    console.log(x, y);
    return x * y;
});

numbers.reduce(function(acc, curr) {
    if (acc > curr){
        return acc;
    } else {
        return curr
    }
});

// Practice
// use map method on all elements of an array
// use reduce methos to return single value of new array
// CHALLENGE
// chain method

var nums = [1, 2, 3, 4];

nums.map(function(number) {
    return number * 3;
}).reduce(function(acc, curr){
    return acc + curr;
}, 0);

nums;
