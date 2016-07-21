'use strict';

var first = 'first';
(function() {
  var first = 'second';
  for(let x = 0; x < 10; x++)
    for(let x = 10; x < 20; x++)
      console.log(x);
  console.log('inside: ' + first);
})();
console.log('outside: ' + first);
