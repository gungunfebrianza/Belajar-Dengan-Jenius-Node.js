function sumAll() {
  var i;
  var sum = 0;

  for (
    i = 0;
    i < arguments.length;
    i++
  ) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1, 123, 500, 115, 44, 88));
//871