  // bad
  function foo() {
    // ...
  }

  // bad
  const foo = function () {
    // ...
  };

  // good
  // lexical name distinguished from the variable-referenced invocation(s)
  const short = function longUniqueMoreDescriptiveLexicalFoo() {
    // ...
  };