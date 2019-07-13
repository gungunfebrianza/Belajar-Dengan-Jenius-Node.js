
function Person(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

var maudy = new Person("Maudy", "Ayunda Faza", 23, "Black")
console.log(maudy);
/*
Output :
Person {
  firstname: 'Maudy',
  lastname: 'Ayunda Faza',
  age: 23,
  eyecolor: 'Black'
}
 */