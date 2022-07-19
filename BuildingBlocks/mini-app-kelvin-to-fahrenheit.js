// Temperature in kelvin stored in variable `kelvin`
var kelvinTemp = 301;

// temperature in celsius stored in variable `celsius`
var celsiusTemp = kelvinTemp - 273.15;

// convert celsius to fahrenheit stored in variable `fahrenheit`
var fahrenheitTemp = celsiusTemp * (9/5) + 32;

// round the value of fahrenheit down and assign to `fahrenheit`
fahrenheitTemp = Math.floor(fahrenheitTemp);

// use string concatenation to leave a message
// "The temperature is `fahrenheit` degrees Fahrenheit."
console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.');