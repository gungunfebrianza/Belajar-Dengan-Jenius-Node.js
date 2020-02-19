function div(x) {
  if (Number.isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return 'Number is Infinity!';
}

console.log(div(0));
// expected output: "Number is Infinity!"

console.log(div(1));
// expected output: "Number is NOT Infinity."

Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite('0'); // false, would've been true with
// global isFinite('0')
Number.isFinite(null); // false, would've been true with
// global isFinite(null)

// The Number.isFinite() method determines whether the passed value is a finite number.
/* In comparison to the global isFinite() function, this method doesn't forcibly convert the parameter to a number. This means only values of the type number, that are also finite, return true. */
