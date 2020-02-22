  var person = {
    fullName: function (city, country) {
      return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
    }
  };
  var person1 = {
    firstName: 'Nikolaj',
    lastName: 'Vestorp'
  };
  var x = person.fullName.apply(person1, ['Antares', 'Denmark']);
  console.log(x);
