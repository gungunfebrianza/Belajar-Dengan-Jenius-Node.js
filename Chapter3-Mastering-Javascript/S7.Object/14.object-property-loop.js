var person = {
  fname: "Gun Gun",
  lname: "Febrianza",
  age: 28
};

var x;
for (x in person) {
  console.log(x);
  console.log(person[x]);
}

/* 
fname
Gun GUn
lname
Febrianza
age
28 
*/
