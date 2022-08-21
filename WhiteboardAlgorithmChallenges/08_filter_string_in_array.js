// create a function that takes an array of non-negatives and string and returns a new array without the strings.
// Rules
    // Filter out all string.
    // return onlu numbers.
    // example
    // [1, 2, "a", "b"] => [1, 2]

function filterArray(arr) {
    var onlyNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            onlyNumbers.push(arr[i]);
        }
    }
    return onlyNumbers;
}

function filterArrayWithFilter(arr) {
    return arr.filter((element) =>  typeof element === 'number')
}

filterArrayWithFilter([1, 2, "a", "b"]);

filterArray([1, 2, "a", "b"]);
filterArrayWithFilter([1, 2, "a", "b"]);