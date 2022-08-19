// let statement review
// let is an alternative to var
// utilizes block scope while var only utilizes function scope
// temporal dead zone
// using the let statement should help our code make more sense and our code less buggy

// challenge
// create identical set of code and show how 'var' does not take adventage of block scope but 'let' does

// var
if (true) {
    var name = 'Tito';
    var name = 'Pablo';
}

// let
if (true) {
    let name = 'Tito';
    // let name = 'Pablo';
    if (true) {
        let name = 'Pablo';
    }
}

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

varTest();

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

letTest();
