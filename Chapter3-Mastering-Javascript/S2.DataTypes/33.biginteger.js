const bigInt1 = 1234567890123456789012345678901234567890n;
const bigInt2 = BigInt("1234567890123456789012345678901234567890");
const bigInt3 = BigInt(1234567890123456789012345678901234567890);

console.log(typeof 123); // 'number'
console.log(typeof 123n); // 'bigint'

console.log(Number.MAX_SAFE_INTEGER);
// output : 9007199254740991
console.log(1234567890123456789012345678901234567890n);
// output : 1234567890123456789012345678901234567890n
console.log(typeof 1234567890123456789012345678901234567890n);
// output : bigint

console.log(50n * 2n); //100n
console.log(50n / 2n);// 25n
console.log(5n / 2n); // 2n

console.log(1n < 2); // true
console.log(2n > 1); // true
console.log(2 > 2); // false
console.log(2n > 2); // false
console.log(2n >= 2); // true

console.log(0n === 0); // false
console.log(0n == 0); // true



