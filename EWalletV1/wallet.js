class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.wallet = {};
  }
}

class HistoryTransaction {
  constructor(category, date) {
    this.category = category
    this.date = date;
  }
}

const gun = new User(1, "Gun Gun");

class Wallet {
  constructor(id, balance, history) {
    this.id = id;
    this.balance = balance;
    this.transferList = [];
    this.history = [];
  }
  AddAmmount(balance) {
    this.balance += balance;
    this.history.push(new HistoryTransaction('Add Ammount', Date.now()))
    return this.balance;
  }
  SubtractAmmount(balance) {
    this.balance -= balance;
    return this.balance;
  }
}

const BTCwallet = new Wallet(1, 5000, []);
gun.wallet = BTCwallet;

console.log(gun);

/* BTCwallet.transferList.push({
  name: "Maudy",
  accountNumber: 9998,
  bank: "BRI"
});
BTCwallet.transferList.push({
  name: "Ayunda",
  accountNumber: 9997,
  bank: "BRI"
});
BTCwallet.transferList.push({ name: "Faza", accountNumber: 9996, bank: "BRI" });
BTCwallet.transferList.push({ name: "Gun", accountNumber: 9999, bank: "BRI" }); */
