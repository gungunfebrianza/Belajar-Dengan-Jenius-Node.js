
try {
  test()
} catch (ex) {
  console.log(ex.name); //ReferenceError
  console.log(ex.message); //test is not defined
  console.log(ex.stack);
}