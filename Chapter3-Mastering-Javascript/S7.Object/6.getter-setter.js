  var mod = {
    firstname: 'Maudy',
    lastname: 'Ayunda Faza',
    age: 23,
    haircolor: 'black',
    get getFirstName() {
      return this.firstname
    },
    set setFirstName(name) {
      this.firstname = name;
    }
  }

  console.log(mod.getFirstName); // Maudy
  mod.setFirstName = 'Rindu';
  console.log(mod.getFirstName); // Maudy
