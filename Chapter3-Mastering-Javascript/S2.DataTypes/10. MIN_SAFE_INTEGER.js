var x = Number.MIN_SAFE_INTEGER - 1;
var y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// expected output: -9007199254740991

console.log(x);
// expected output: -9007199254740992

console.log(x === y);
// expected output: true

/* For example, Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2 will evaluate to true, which is mathematically INCORRECT. See Number.isSafeInteger() for more information. */
