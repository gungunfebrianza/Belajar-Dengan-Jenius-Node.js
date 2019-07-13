
function cantik(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
}

var maudy = new cantik("Maudy", "Ayunda Faza", 23, "Black")
maudy.age = 25;
console.log(maudy);
/*
Output :
cantik {
  firstname: 'Maudy',
  lastname: 'Ayunda Faza',
  age: 25,
  eyecolor: 'Black'
}
 */