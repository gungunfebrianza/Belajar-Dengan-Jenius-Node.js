var person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};
var person1 = {
  firstName: 'Gun Gun',
  lastName: 'Febrianza'
};
var person2 = {
  firstName: 'Nikolaj',
  lastName: 'Vestorp'
};
var x = person.fullName.call(person1);
console.log(x); //Gun Gun Febrianza

// Another Example
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

var x = new Food('cheese', 5);

console.log(x.name); // cheese
console.log(x.category); // food

