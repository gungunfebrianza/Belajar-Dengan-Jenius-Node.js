function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'Gun Gun Febrianza';
  callback(name);
}

processUserInput(greeting);
//Hello Gun Gun Febrianza