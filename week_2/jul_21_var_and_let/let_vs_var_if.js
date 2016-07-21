'use strict';
var i = 'outside';

if (true) {
  var j = 1;
}
console.log(j);

if (true) {
  let i = 0;
  console.log('inside: ' + i);
}
  
console.log(i);

