class wallet {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
  static getBalance() {
    return "Your Balance is 0";
  }
}

console.log(wallet.getBalance());
// Your Balance is 0
