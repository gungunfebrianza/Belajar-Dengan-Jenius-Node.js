var person = {
  firstName: "Gun Gun",
  lastName: "Febrianza",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
// Output : Gun Gun Febrianza

person.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person.name());
  // Output Gun Gun Febrianza

