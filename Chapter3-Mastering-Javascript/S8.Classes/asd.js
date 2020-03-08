class Wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
  get balance() {
    return this.balance;
  }
  set balance(x) {
    this.balance = x;
  }
}

class ewallet extends Wallet {
  constructor(id, balance, type) {
    super(id, balance);
    this.type = type;
  }
}

const mywallet = new ewallet(1, 1000, "gopay");
console.log(mywallet);
// ewallet { id: 1, balance: 1000, type: 'gopay' }
console.log(mywallet.balance(3333));
// Your Balance is 0
