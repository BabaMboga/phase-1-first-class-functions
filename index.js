// receivesAFunction and has a callback as a function
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction takes no arguments and returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I have a name");
    }
    return namedFunction;
  }
  
  // returnsAnAnonymousFunction takes no arguments and returns an anononymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am anonymous");
    }
  }
  