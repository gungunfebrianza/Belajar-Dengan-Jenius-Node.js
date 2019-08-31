var person = {
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
var person1 = {
  firstName: 'John',
  lastName: 'Doe'
};
var x = person.fullName.apply(person1);
console.log(x);
