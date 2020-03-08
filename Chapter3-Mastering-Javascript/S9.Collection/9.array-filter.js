const mod = ["Maudy", 100, "Ayunda", 200, "Faza", 300];

const gun = mod.filter(item => {
  return typeof item === "string";
});

console.log(gun);
// ["Maudy", "Ayunda", "Faza"];
