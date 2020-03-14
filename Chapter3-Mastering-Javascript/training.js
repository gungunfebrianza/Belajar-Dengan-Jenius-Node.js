//Function Declaration
function getName() {}

//Function Expression
let x = function() {};

//Arrow Function
() => {};

//Class Declaration
class Wallet {
  constructor(balance) {
    this.balance = balance;
  }
}

//class declaration - static method
class Wallet2 {
  constructor(balance) {
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
}

const gun = new Wallet2(2000);
console.log(gun.getBalance());

  var harga = 25