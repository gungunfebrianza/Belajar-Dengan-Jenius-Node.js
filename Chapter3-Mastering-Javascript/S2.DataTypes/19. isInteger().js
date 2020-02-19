function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}

console.log(fits(5, 10));
// expected output: "Fits!"

console.log(fits(5, 11));
// expected output: "Does NOT fit!"

Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger('10'); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

/* The Number.isInteger() method determines whether the passed value is an integer.

If the target value is an integer, return true, otherwise return false. If the value is NaN or Infinity, return false. */
