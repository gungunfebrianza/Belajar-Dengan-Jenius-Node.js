// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

// Why ? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}