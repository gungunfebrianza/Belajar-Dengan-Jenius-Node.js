  var person = {
    fullName: function (city, country) {
      return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
    }
  };

  var person1 = { firstName: 'Gun Gun', lastName: 'Febrianza' };

  var x = person.fullName.call(person1, 'Bandung', 'Indonesia');
  console.log(x); // Gun Gun Febrianza,Bandung,Indonesia
