class wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
}

var a = new wallet(1, 2000);
console.log(a);
//wallet { id: 1, balance: 2000 }
