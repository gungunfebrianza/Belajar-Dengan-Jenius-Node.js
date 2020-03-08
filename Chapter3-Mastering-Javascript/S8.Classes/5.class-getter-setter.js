class Wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
  get Balance() {
    return this.balance;
  }
  set Balance(balance) {
    this.balance += balance;
  }
}

const duitku = new Wallet(1, 2000);
duitku.Balance = 2000;
console.log(duitku.Balance); //4000
