function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return 'Process as Infinity';
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// expected output: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// expected output: "Process as Infinity"

/* The Number.MAX_VALUE property represents the maximum numeric value representable in JavaScript.
The MAX_VALUE property has a value of approximately 1.79E+308, or 21024. Values larger than MAX_VALUE are represented as Infinity. */
