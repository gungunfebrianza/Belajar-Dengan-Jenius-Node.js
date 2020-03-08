/* Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number. */
var myNumber = 2;
while (myNumber != Infinity) {
  // Execute until Infinity
  console.log((myNumber = myNumber * myNumber));
}
/* Output :
4
16
256
65536
4294967296
18446744073709552000
3.402823669209385e+38
1.157920892373162e+77
1.3407807929942597e+154
Infinity */

// Angka yg dibagi 0 (zero) memproduksi Infinity:
var x = 2 / 0; // x memproduksi Infinity
var y = -2 / 0; // y memproduksi -Infinity
console.log(x);
console.log(y);

// Infinity is a number: typeof Infinity returns number.
typeof Infinity; // returns "number"

function div(x) {
  if (Number.isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
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
