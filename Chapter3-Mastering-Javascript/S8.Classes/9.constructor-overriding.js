class Wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
}

class Ewallet extends Wallet {
  constructor(id, balance, type) {
    super(id, balance);
    this.type = type;
  }
}

const mywallet = new Ewallet(1, 2000, "gopay");
console.log(mywallet.getID()); // Your id is 1
