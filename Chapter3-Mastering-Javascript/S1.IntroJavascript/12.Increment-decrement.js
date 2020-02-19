/*
      The increment operator increments (adds one to) its operand and returns a value.

      If used postfix, with operator after operand (for example, x++),
      then it returns the value before incrementing.
      If used prefix with operator before operand (for example, ++x),
      then it returns the value after incrementing.
  */

var a = 5,
  b = 5;
var a = ++a;
var b = --b;
console.log(a);
console.log(b);
