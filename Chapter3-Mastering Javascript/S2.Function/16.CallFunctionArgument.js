    var person = {
      fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
      }
    };

    var person1 = { firstName: 'John', lastName: 'Doe' };

    var person2 = { firstName: 'Mary', lastName: 'Doe' };

    var x = person.fullName.call(person1, 'Oslo', 'Norway');
    console.log(x);
