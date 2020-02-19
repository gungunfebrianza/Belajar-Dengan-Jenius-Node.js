/* NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number): */
var x = 100 / 'Apple'; // x will be NaN (Not a Number)

//However, if the string contains a numeric value , the result will be a number:
var x = 100 / '10'; // x will be 10

// You can use the global JavaScript function isNaN() to find out if a value is a number:
var x = 100 / 'Apple';
isNaN(x); // returns true because x is Not a Number

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:
var x = NaN;
var y = 5;
var z = x + y; // z will be NaN

// Or the result might be a concatenation:
var x = NaN;
var y = '5';
var z = x + y; // z will be NaN5

// NaN is a number: typeof NaN returns number:
typeof NaN; // returns "number"
