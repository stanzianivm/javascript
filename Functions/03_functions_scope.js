// review function scope
// scope determined by where variable is definded
// global and local
// scope chain

// global function
var height = 10;

function volume() {
    // parent scope
    var width = 10;
    var length = 10;
    var volumeOfObject = function() {
        // child or local scope
        return length * width * height;
    }
    // return value of function expression volumeOfObject
    return volumeOfObject();
}

var vol = volume();
console.log(vol);

myarray.map((item) => {});

const asd = () => {
    if (a === b) {

    }
    console.log()
    return a
};

for (let i = 0; i < 5; i++) {}

for (prop of object) {}

myarray.forEach((element) => { });