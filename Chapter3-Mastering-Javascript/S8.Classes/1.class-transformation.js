/*   function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
  }

  person.prototype.getName = function() {
    return this.firstname + " " + this.lastname;
  };

  var hooman = new person("Gun Gun", "Febrianza", 28, "brown");
  console.log(hooman.getName()); 
  //Gun Gun Febrianza */

  class person {
    constructor(firstname, lastname, age, eyecolor) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.age = age;
      this.eyecolor = eyecolor;
    }
    getName() {
      return this.firstname + " " + this.lastname;
    }
  }

var hooman = new person("Gun Gun", "Febrianza", 28, "brown");
console.log(hooman.getName());
//Gun Gun Febrianza