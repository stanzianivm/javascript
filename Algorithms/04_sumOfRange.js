// Math.max(): Wiil look at all the element in an array and return the value of the largest number
// math.min(): Will return the smallest of zero or more numbers

//CHALLENGE
// find the sum of all numbers in a range of two number in an array
// largest number may be given first

// declare function and give it a parameter of an array
function addAll(array) {
    // use Math.max to look at index of both elements and return the largest
    var max = Math.max(array[0], array[1]);
    // use Math.min to look at index of both elements and return the smallest
    var min = Math.min(array[0], array[1]);
    // declare a variable to hold the running total value
    var total = 0;
    // create for loop woth counter initialized to min, test of largest value and update
    for (let i = min; i <= max; i++) {
        // add current value in the for loop to total value
        total += i;
    }
    // after you have finished for loop return the value
    return total;
}

addAll([1, 4]);