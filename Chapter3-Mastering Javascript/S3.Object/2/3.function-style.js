
function cantik(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

var maudy = new cantik("Maudy", "Ayunda Faza", 23, "Black")
console.log(maudy);
/*
Output :
cantik {
  firstname: 'Maudy',
  lastname: 'Ayunda Faza',
  age: 23,
  eyecolor: 'Black'
}
 */