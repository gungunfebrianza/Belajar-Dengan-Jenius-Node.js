/* Extra large or extra small numbers can be written with scientific (exponent) notation:
Example */
var x = 123e5; // 12300000
var y = 123e-5; // 0.00123

console.log(x);
console.log(y);

let billion = 1e9; //1 billion (1 & 9 zero)
//1e3 = 1*1000
//1.23e6 = 1.23 * 1000000 

//explicit zero
let ms = 0.000001;
//implicit zero
let ms = 1e-6;

//1e-3 = 1 / 1000
//1.23e-6 = 1.23 / 1000000