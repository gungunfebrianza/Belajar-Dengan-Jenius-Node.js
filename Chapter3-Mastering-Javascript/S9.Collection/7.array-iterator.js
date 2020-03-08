const soul = ["Maudy", "Ayunda Faza", "Gun Gun", "Febrianza"];

var x = soul.entries();
for (n of x) {
  console.log((n = n));
}
/* 
[ 0, 'Maudy' ]
[ 1, 'Ayunda Faza' ]
[ 2, 'Gun Gun' ]
[ 3, 'Febrianza' ] 
*/