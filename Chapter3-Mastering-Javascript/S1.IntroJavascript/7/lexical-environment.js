var a = 10;
var b = 20;

function foo() {
  console.log('bar');
}

/* Lexical Environment Representation
lexicalEnvironment = {
  a: 10,
  b: 20,
  foo: <reference untuk foo function>
  } */