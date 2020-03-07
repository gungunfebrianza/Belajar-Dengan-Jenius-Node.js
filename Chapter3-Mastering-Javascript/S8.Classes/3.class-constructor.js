class Log {
  constructor(...args) {
    console.log(args);
  }
}

new Log('data 1', 'data 2', 'data 3')
// Output [ 'data 1', 'data 2', 'data 3' ]