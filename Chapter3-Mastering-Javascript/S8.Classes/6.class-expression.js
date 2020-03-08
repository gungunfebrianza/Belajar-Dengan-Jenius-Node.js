let mywallet1 = class {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
};

console.log(mywallet1.name); //mywallet1
console.log(typeof mywallet1); //function

let mywallet2 = class wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
};

console.log(mywallet2.name); //wallet
