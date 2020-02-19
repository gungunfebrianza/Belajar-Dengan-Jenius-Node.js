// JavaScript strings can have numeric content:
var x = 100; // x is a number
var y = '100'; // y is a string

// JavaScript will try to convert strings to numbers in all numeric operations:

// This will work:
var x = '100';
var y = '10';
var z = x / y; // z will be 10

// This will also work:
var x = '100';
var y = '10';
var z = x * y; // z will be 1000

// And this will work:
var x = '100';
var y = '10';
var z = x - y; // z will be 90

// But this will not work:
var x = '100';
var y = '10';
var z = x + y; // z will not be 110 (It will be 10010)

// In the last example JavaScript uses the + operator to concatenate the strings.
