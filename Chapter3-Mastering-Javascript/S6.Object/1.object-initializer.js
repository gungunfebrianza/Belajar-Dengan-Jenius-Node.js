var mod = { 
  firstname: 'Maudy', 
  lastname: 'Ayunda Faza', 
  age: 23, 
  haircolor: 'black' 
}

console.log(mod);
/*
Output :
{
  firstname: 'Maudy',
  lastname: 'Ayunda Faza',
  age: 23,
  haircolor: 'black'
}
 */

//Another Example:
var o = {}; //Buat object kosong

//physical object
var Computer = {
  processor: "i7",
  OS: "windows",
  RAM: "32GB",
  storage: "2TB",
  price: 25000000
}

//physical object
var wallet = {
  walletID : 2,
  owner : "Gun Gun Febrianza",
  balance : 1000000,
}

//physical object
var book = {
  author: "Gun Gun Febrianza",
  title: "Belajar dengan Jenius Javascript",
  pages: 500,
  price: 0
}

//abstract object
var transaction = {
  from: "Gun Gun Febrianza",
  to: "Nikolaj Vestorp",
  ammount: 500,
  date: Date.now()
}

//abstract object
var message = {
  date: Date.now(),
  from: "Nikolaj Vestorp",
  to: "Gun Gun Febrianza",
  message: "hello Gun Gun Febrianza!",
  category: "Private Message",
}