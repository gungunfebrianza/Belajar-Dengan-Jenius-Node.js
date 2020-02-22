/* The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base. */

parseInt('100'); //= 100
parseInt('2018@geeksforgeeks'); //= 2018
parseInt('geeksforgeeks@2018'); //= NaN
parseInt('3.14'); //= 3
parseInt('21 7 2018'); //= 21
parseInt('100', 10); //= 100
parseInt('8', 8); //= NaN
parseInt('15', 8); //= 13
parseInt('16', 16); //= 22
parseInt(' 100 '); //= 100
parseInt('0x16'); //= 22
parseInt('10'); //= 10
parseInt('10.33'); //= 10
parseInt('10 20 30'); //= 10
parseInt('10 years'); //= 10
parseInt('years 10'); //= NaN
//If the number cannot be converted, NaN (Not a Number) is returned.
