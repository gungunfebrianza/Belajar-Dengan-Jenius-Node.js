console.log(parseFloat(' 100 ')); //= 100
console.log(parseFloat('2018@geeksforgeeks')); //= 2018
console.log(parseFloat('geeksforgeeks@2018')); //= NaN
console.log(parseFloat('3.14')); //= 3.14
console.log(parseFloat('22 7 2018')); //= 22
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN 

// The Number.parseFloat() method parses a string argument and returns a floating point number.
