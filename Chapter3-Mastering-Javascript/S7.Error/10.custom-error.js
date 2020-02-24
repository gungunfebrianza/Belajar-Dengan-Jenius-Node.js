function Wallet(id) {
  if (walletValidation(id)) {
    this.id = id
  }
}

function walletValidation(id) {
  if (id === undefined) {
    try {
      throw new Error("Wallet Validation Error: Cant Create Object Withoud ID !");
    } catch (err) {
      console.log(err.message);
      return false
    }
  } else if (typeof id === 'string') {
    try {
      throw new Error("Wallet Validation Error: Input ID must be number !");
    } catch (err) {
      console.log(err.message);
      return false;
    }
  }
  return true
}

var mywallet = new Wallet('2000')
console.log(mywallet.id); // undefined











