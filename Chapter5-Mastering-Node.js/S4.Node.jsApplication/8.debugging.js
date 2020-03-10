const book = {
  title: "Belajar dengan Jenius AWS & Node.js",
  price: 80000
};
const discount = 0.2;
const discountPrice = book.price * discount;
console.log(`Harga buku : ${book.price - discountPrice}`);
