/* JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated.
If you add two numbers, the result will be a number: */
var x = 10;
var y = 20;
var z = x + y; // z will be 30 (a number)

/* If you add two strings, the result will be a string concatenation:
Example */
var x = '10';
var y = '20';
var z = x + y; // z will be 1020 (a string)

/* If you add a number and a string, the result will be a string concatenation:
Example */
var x = 10;
var y = '20';
var z = x + y; // z will be 1020 (a string)

/* If you add a string and a number, the result will be a string concatenation:
Example */
var x = '10';
var y = 20;
var z = x + y; // z will be 1020 (a string)

/* A common mistake is to expect this result to be 30:
Example */
var x = 10;
var y = 20;
var z = 'The result is: ' + x + y;

// If you add two strings, the result will be a string concatenation:
var x = '10';
var y = '20';
var z = x + y; // z will be 1020 (a string)

// If you add a number and a string, the result will be a string concatenation:
var x = 10;
var y = '20';
var z = x + y; // z will be 1020 (a string)

// If you add a string and a number, the result will be a string concatenation:
var x = '10';
var y = 20;
var z = x + y; // z will be 1020 (a string)

// A common mistake is to expect this result to be 30:
var x = 10;
var y = 20;
var z = 'The result is: ' + x + y;
// A common mistake is to expect this result to be 102030:
var x = 10;
var y = 20;
var z = '30';
var result = x + y + z;
