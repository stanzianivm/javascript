// Regular exoression: Sequnse of characters that form a search pattern. May be a single character, or a more complicated pattern.
// Used often with text search and replace operations

// string.replace(): Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or regex.
// The replacement can be a string or function to be called for each march.

// measure whether a string is a palindrome

// create a function with parameter of string
function palindrom(str) {
    // take string and remove all non-word characters and turn string into lower case assuming that it is case insensitive
    str.replace(/\W/g, '').toLowerCase();
    // put in parentheses to get a boolean value. Split it into an array. Reverse the array. Join into a string
    return (str == str.split('').reverse().join(''));
}

palindrom('racecar');
