var a = 10; // variabel berada dalam global context

(function () {
  var b = 20; // variabel lokal berada dalam function context
})();

console.log(a); // 10
console.log(b); // "b" is not defined

