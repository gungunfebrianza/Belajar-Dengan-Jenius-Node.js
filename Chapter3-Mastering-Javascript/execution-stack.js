let hello = 'Hello World!';

function executionContextPertama() {
  console.log('Di dalam function');
  executionContextKedua();
  console.log('Di dalam function');
}

function executionContextKedua() {
  console.log('Di dalam function');
}

executionContextPertama();
console.log('Di dalam Global Execution Context');