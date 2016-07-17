'use strict';

function reverseString(str) {
  return str.split('').reverse().join();
}

console.log('reverse', reverseString('abcde'));
