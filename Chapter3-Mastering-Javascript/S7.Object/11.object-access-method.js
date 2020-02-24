var person = {
  firstName: "Gun Gun",
  lastName: "Febrianza",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
  // Output : Gun Gun Febrianza
