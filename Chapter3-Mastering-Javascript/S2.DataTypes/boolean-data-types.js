var x = true;
var y = false;

console.log(x); //true
console.log(x); //false

const isExcuted1 = new Boolean(false)

if (isExcuted1) {
  console.log('isExecuted1 executed!');
} else {
  console.log('isExecuted1 not executed!');
}
// output : isExecuted1 executed!

const isExcuted2 = false

if (isExcuted2) {
  console.log('isExecuted2 executed!');
} else {
  console.log('isExecuted2 not executed!');
}
  // output : isExecuted2 not executed!
