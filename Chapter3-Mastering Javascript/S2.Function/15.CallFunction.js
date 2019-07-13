var person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};
var person1 = {
  firstName: 'John',
  lastName: 'Doe'
};
var person2 = {
  firstName: 'Mary',
  lastName: 'Doe'
};
var x = person.fullName.call(person1);
console.log(x); //John Doe

// Another Example
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
console.log(new Food('cheese', 5).category);
// expected output: "cheese"

