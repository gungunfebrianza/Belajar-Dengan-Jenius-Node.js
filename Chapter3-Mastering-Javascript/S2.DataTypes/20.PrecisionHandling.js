/* Definition and Usage
The toPrecision() method formats a number to a specified length.
A decimal point and nulls are added (if needed), to create the specified length. */

var num = 13.3714;
var a = num.toPrecision();
var b = num.toPrecision(2);
var c = num.toPrecision(3);
var d = num.toPrecision(10);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

/* Result 
13.3714;
13;
13.4;
13.3714; */

function precise(x) {
  return Number.parseFloat(x).toPrecision(4);
}

console.log(precise(123.456));
// expected output: "123.5"

console.log(precise(0.004));
// expected output: "0.004000"

console.log(precise('1.23e+5'));
// expected output: "1.230e+5"

var numObj = 5.123456;

console.log(numObj.toPrecision()); // logs '5.123456'
console.log(numObj.toPrecision(5)); // logs '5.1235'
console.log(numObj.toPrecision(2)); // logs '5.1'
console.log(numObj.toPrecision(1)); // logs '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // logs '0.000123'
console.log(numObj.toPrecision(5)); // logs '0.00012300'
console.log(numObj.toPrecision(2)); // logs '0.00012'
console.log(numObj.toPrecision(1)); // logs '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // logs '1.2e+3'
