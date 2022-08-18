// array.slice(): Does not alter original array but returns and altered copy of the array
// array.splice(): This method changes the content of an array by removing existing elements and/or adadding new elements

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.splice(2, 0, "Lemon", "Kiwi");	
fruitss;