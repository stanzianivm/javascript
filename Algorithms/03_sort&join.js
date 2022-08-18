// create algorithm to determine if two strings are a permitation of each other
// SORT: he sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
// JOIN: The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
//separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

//The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// declare function and give two paraneters
function isPermitation(str1, str2) {
    // return the value of comparing two strings using strict equality operator
    return str1.split(' ').sort().join('') == str2.split(' ').sort().join('') ;
}

isPermitation('victor', 'torvic');