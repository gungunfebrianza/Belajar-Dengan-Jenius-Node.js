module.exports = class Wallet {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  topUp(newbalance) {
    return (this.balance += newbalance);
  }
};
