/* The toExponential() method returns a string representing the Number object in exponential notation. */

var x = 9.656;
console.log(x.toExponential(2)); // returns 9.66e+0
console.log(x.toExponential(4)); // returns 9.6560e+0
console.log(x.toExponential(6)); // returns 9.656000e+0

var numObj = 77.1234;
console.log(numObj.toExponential()); // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log((77.1234).toExponential()); // logs 7.71234e+1
console.log((77).toExponential()); // logs 7.7e+1
