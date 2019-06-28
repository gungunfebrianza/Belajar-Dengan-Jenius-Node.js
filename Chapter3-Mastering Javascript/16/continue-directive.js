for (i = 0; i < 6; i++) {
  if (i === 3) { continue; }
  console.log("Perulangan Ke " + i);
}
// Output
// Perulangan Ke 0
// Perulangan Ke 1
// Perulangan Ke 2
// Perulangan Ke 4
// Perulangan Ke 5

/* 
//Example #1 :
//Remove the comment [SHIFT+ALT+A]:
var text = "";

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
//output: "012456789" */