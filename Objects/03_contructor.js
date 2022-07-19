// The way to create an "object type", is to use an object constructor function.
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Objects of the same type are created by calling the constructor function with the new keyword:
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather);
console.log(myMother);

// Challenge
// create book with object literal notation
// create library with object constructor function
// create 5 instance of book

// Book with literal notation
var book = {
    author: 'Pablo Mennuto',
    title: "The diary of a young girl",
    pages: 300
};

// Book contructor
function Book(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function Person(personData) {
    let name;
    let surname;
    let age;

    if (!presonData) {
        return;
    }

    this.name = personData.name;
    this.surname = personData.surname;
    this.age = personData.age;
}

// Book instances
const bookOne = new Book('Antonie', 'El Principito', 100);
const bookTwo = new Book('Zafón', 'La Sombra Del Viento', 150);
const bookThree = new Book('Charles', 'Grandes Esperanzas', 200);