// Declare our function and string parameter to be filled with argument
function unique(str) {
    // run for loop yo interate through our string character by character
    for (var i = 0; i < str.length; i++) {
        // check to see if first and last instances of character are the same
        // if not true that they are iquals return false
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]))return false;

    }
    // if we make it through the loop without returning a value of false
    return true;
}

unique("car");
unique("add");