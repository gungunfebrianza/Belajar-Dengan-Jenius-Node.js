var str = "";

loop1:
for (var i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
  console.log(str);

}

//output :
// 0
// 02
// 023
// 0234