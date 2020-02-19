/*
        The unary negation operator precedes its operand and negates it.
        */
console.log(+3); // 3
console.log(+'3'); // 3
console.log(+true); // 1
console.log(+false); // 0
console.log(
  +function (val) {
    return val;
  }
); // NaN
console.log(+null); // 0
