
function Person(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

var maudy = new Person("Maudy", "Ayunda Faza", 23, "Black")
maudy.age = 25;
console.log(maudy);
/*
Output :
Person {
  firstname: 'Maudy',
  lastname: 'Ayunda Faza',
  age: 25,
  eyecolor: 'Black'
}
 */