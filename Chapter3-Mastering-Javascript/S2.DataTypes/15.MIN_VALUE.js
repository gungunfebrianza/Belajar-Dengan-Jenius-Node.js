function multiply(x, y) {
  if (x * y < Number.MIN_VALUE) {
    return 'Process as -Infinity';
  }
  return x * y;
}

console.log(multiply(5e-324, 1));
// expected output: 5e-324

console.log(multiply(-1.7976931348623157e308, 2));
// expected output: Process as -Infinity

/* The MIN_VALUE property is the number closest to 0, not the most negative number, that JavaScript can represent.

MIN_VALUE has a value of approximately 5e-324. Values smaller than MIN_VALUE ("underflow values") are converted to 0. */
