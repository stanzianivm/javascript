// 1. Create an array of 10 random numbers
var numbers = [1, 3, 10, 20, 9, 8, 45, 2, 12, 6];
console.log('Array numbers', numbers);

// 2. Sort that array in ascending order
var arrayAscendingOrder = numbers.sort(function(a, b) {
    return a-b;
});
console.log('Ascending order', arrayAscendingOrder);

// 3. Sort that array in descending order
var arrayReverseOrder = numbers.reverse((a, b) => {
    return a - b;
});
console.log('Reverse order', arrayAscendingOrder);

// 4. Print all the even numbers from that array
numbers.forEach(number => {
    if (number % 2 === 0) {
          console.log('Even number', number);
    }
});

// 5. Separate the even numbers in their own array
var arrayEven = numbers.filter(number => {
    return number % 2 === 0;
});
console.log('Array even', arrayEven);

// 6. All 10 random even numbers to the new array. From those 10, 5 of them must be add at first, 2 of them somewhere in between, and the remaining 3 at the end of the array
var newArray = [21, 20, 26, 30, 27, 89, 55, 47, 60, 77];
console.log('New Array numbers', newArray);

var firstFive = newArray.slice(0, 5);
console.log('First five elements', firstFive);

firstFive.forEach( (number) => { arrayEven.unshift(number); });
console.log('Array numbers with first five elements in the beggining', arrayEven);

var twoElementsOfArray = newArray.slice(5, 7);
console.log('Two elements of the middle', twoElementsOfArray);

twoElementsOfArray.forEach( (number) => arrayEven.splice(6, 0, number));
console.log('Array numbers with two elements of new array', arrayEven);

var lastElements = newArray.slice(7);
console.log('Last Elements of new array', lastElements);

lastElements.forEach( (number) => { arrayEven.push(number); })
console.log('Array numbers with last elements of new array', arrayEven);

// 7. Print all the odd numbers from that array
numbers.forEach(number => {
    if (number % 2 !== 0) {
          console.log('Odd number', number);
    }
});

// 8. Separate the odd numbers in their own array
var arrayOdd = numbers.filter(number => {
    return (number % 2) !== 0;
});
console.log('Array odd', arrayOdd);

// 9. All 10 random odd numbers to the new array. From those 10, 5 of them must be add at first, 2 of them somewhere in between, and the remaining 3 at the end of the array
firstFive.forEach( (number) => { arrayOdd.unshift(number); });
console.log('Array odd numbers with first five elements in the beggining', arrayOdd);

twoElementsOfArray.forEach( (number) => arrayOdd.splice(6, 0, number));
console.log('Array numbers with two elements of new array', arrayOdd);

lastElements.forEach( (number) => { arrayOdd.push(number); })
console.log('Array numbers with last elements of new array', arrayOdd);

// 10. Print all the prime numbers
arrayOdd.forEach(number => {
    if (number <= 1) {
        console.log(number + ' es menor a 1');
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                console.log(number + ' no es número primo');
              	break;
            }
        }
        console.log(number + ' es número primo');      	
    }
});

