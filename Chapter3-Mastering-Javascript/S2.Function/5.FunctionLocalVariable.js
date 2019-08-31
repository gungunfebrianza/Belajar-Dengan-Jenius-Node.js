function tampilkanPesan() {
  let message = "Hello, I'm Message Variable Inside Function"; // local
  console.log(message);
}
tampilkanPesan(); // Hello, I'm JavaScript!
console.log(message); // <-- Error! ReferenceError: message is not defined
