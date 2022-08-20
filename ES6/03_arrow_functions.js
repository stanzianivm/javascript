// Arrow function review
// short suntax
// anonymous functions
// no function keywords
// parenthesis requires for 0 or 2 or more parameters
// concide body or block body

// es5
var func1 = function() {
    return 'Hi';
}
func1();

// challenge
// rewrite func1 in es6 arrow function syntax
// concide body
// block body

var func2 = () => 'Hi';
func2();

var func3 = () => { return 'Hi'; }
func3();

// challenge
// create two arrow functions
// no parameters and two or more parameters
// choose either concise or block body

var func4 = () => 'Victor';
func4();

var func5 = (a, b) => a + b;
func5(2, 5);

// example
function mult(array) {
    let result = array.map(function(num) {
        return num * num;
    });
  	return result;
}

var numbers = [2, 3, 4, 5];
const result = mult(numbers);
result;
