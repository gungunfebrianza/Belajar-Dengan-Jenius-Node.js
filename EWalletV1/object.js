var person = {
  stringProperty: "String Property",
  numberProperty: 999,
  justNull: null,
  justUndefined: undefined,
  boolTrue: true,
  objectAgain: {
    level1property1: 'Level 1 - Object Property 1',
    level1property2: {
      level2property1: 'Level 2 - Object Property 1',
      level2property2: {
        level3property1: 'Level 3 - Object Property 1',
      },
    }
  },
  helloFunction: hello(),
  hiFunction: () => 'Gun Gun Febrianza'

}

function hello() {
  return 'hello world!';
}

console.log(person.stringProperty);
console.log(person.justNull);
console.log(person.justUndefined);
console.log(person.boolTrue);
console.log(person.objectAgain);
console.log(person.objectAgain.level1property1);
console.log(person.objectAgain.level1property2.level2property1);
console.log(person.objectAgain.level1property2.level2property2.level3property1);
console.log(person.helloFunction);
console.log(person.hiFunction());
