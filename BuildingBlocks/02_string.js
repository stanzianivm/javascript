        // string - strings are a data type used to represent text and are wrapped in either a single or double quote

        // same value
        var name = 'Joe';
        var name = "Joe";

        // error - mixing single and double quote
        // var name = 'Joe";

        // wrapping any primitive in quotes will turn it into a string
        typeof "John"                 // Returns "string"
        typeof 3.14                   // Returns "number"
        typeof NaN                    // Returns "number"
        typeof false                  // Returns "boolean"
        typeof [1,2,3,4]              // Returns "object"
        typeof {name:'John', age:34}  // Returns "object"
        typeof new Date()             // Returns "object"
        typeof function () {}         // Returns "function"
        typeof myCar                  // Returns "undefined" *
        typeof null                   // Returns "object"

        // quotes within string
        // errors
        // var greeting = 'It's great to see you!'; // error, matching inner and outer single quotes
        // var response = "Billy said, "I am sick""; // error, matching inner and outer double quotes
        // // possible solution
        // var greeting "It's great to see you!";
        // var response = 'Billy said, "I am sick"';
        // // possible solution - escape character - turns special characters into string characters
        // var greetings 'It\'s great to see you!';
        // var response "Billy said, \"I am sick\"";

        // length property - returns the lengh of a string
        var greeting = "It's good to meet you!";
        greeting.length; // 22

        // toUpperCase()
        var greeting = 'Good to see you!';
        var shoutGreeting = greeting.toUpperCase();
        shoutGreeting; // 'GOOD TO SEE YOU!'

        // check out my latest Hot Tips here: http://bit.ly/front-end-blog
        // follow me on twitter  at https://twitter.com/robmerrill