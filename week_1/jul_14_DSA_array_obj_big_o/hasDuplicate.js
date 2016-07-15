'use strict';

function hasDuplicate(arr) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    } else {
      seen[arr[i]] = true;
    }
  }
  return false;
}

console.log('has duplication', hasDuplicate([1, 2, 2, 3, 4]));
console.log('has duplication', hasDuplicate([1, 2, 3, 4]));
