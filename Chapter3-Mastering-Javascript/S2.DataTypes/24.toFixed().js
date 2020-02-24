// The toFixed() method formats a number using fixed-point notation.
var x = 9.656;
x.toFixed(0); // returns 10
x.toFixed(2); // returns 9.66
x.toFixed(4); // returns 9.6560
console.log(x.toFixed(6)); // returns 9.656000

var numObj = 12345.6789;

numObj.toFixed(); // Returns '12346': note rounding, no fractional part
numObj.toFixed(1); // Returns '12345.7': note rounding
numObj.toFixed(6); // Returns '12345.678900': note added zeros
(1.23e20).toFixed(2); // Returns '123000000000000000000.00'
(1.23e-10).toFixed(2); // Returns '0.00'
(2.34).toFixed(1); // Returns '2.3'
(2.35).toFixed(1); // Returns '2.4'. Note it rounds up
(2.55).toFixed(1); // Returns '2.5'. Note it rounds down - see warning above
-(2.34).toFixed(1); // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
console.log((-2.34).toFixed(1)); // Returns '-2.3' (...unless you use parentheses)

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// expected output: "123.46"

console.log(financial(0.004));
// expected output: "0.00"

console.log(financial('1.23e+5'));
// expected output: "123000.00"
