// call method review
// calls a function with a given "this" value and arguments provided individually
// call - indevidual arguments
// apply - array arguments
// C(all) - arguments separeted by commas
// A(pply) - arguments of an array
// Syntax

//function.call(thisContextObject, arg1, arg2...);

// practice
// challenge
// create two people object with a name property and value
// use the call methos on our function
// pass person object as the first argument followed by arguments for lang1, lang2 and lang3

var myLanguages = function(lang1, lang2, lang3){
    console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
}

const person1 = {
    name: 'Victor'
}


const person2 = {
    name: 'Julian'
}

const languages = ['Java', 'Python', 'Node'];

myLanguages.call(person1, '.NET', 'JS', 'Angular');
myLanguages.apply(person2, languages);