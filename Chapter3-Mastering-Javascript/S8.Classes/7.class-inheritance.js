class Wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
  getID() {
    return this.id;
  }
  static getInfo() {
    return `this class contains property, method, static method, getter & setter`;
  }
  get PropBalance() {
    return this.balance;
  }
  set PropBalance(balance) {
    this.balance += balance;
  }
}

class Ewallet extends Wallet {
  constructor(id, balance, type) {
    super(id, balance);
    this.type = type;
  }
}

const mywallet = new Ewallet(1, 2000, "gopay");
console.log(mywallet.id); // Output : 1
console.log(mywallet.balance); // Output : 2000
console.log(mywallet.getID()); // Output : 1
console.log(Ewallet.getInfo());
//this class contains property, method, static method, getter & setter
mywallet.PropBalance = 1000;
console.log(mywallet.PropBalance); //3000
