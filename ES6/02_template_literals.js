// review template literals
// created with 'backticks' not ' ' or " "
// interpolate variables with ${placeholder}
// interpolate any kind of expression
// doesn't interpret backslashes

// challenge
// create a multiline string using single or double quotes es5
// create a multiline string using template literal es6

// es5
function templateES5() {
    var myStr = "This is my \
        multiline String \
        which is amazing";

    var myStrTwo = "This is my" +
    " multiline String " +
        " which is amazing";

    console.log(myStr);
  	console.log(myStrTwo);
}

// es6
function templateES6() {
    let name = 'Victor';
    let lastName = 'Stanziani';

    let str = `Hello my name is ${name} ${lastName}`;
    console.log(str);
}

templateES5();
templateES6();