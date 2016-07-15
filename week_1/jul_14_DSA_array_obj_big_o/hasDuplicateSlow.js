'use strict';

function hasDuplicateSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log('i', i);
    for (let j = i + 1; j < arr.length; j++) {
      console.log('  j', j);
      //console.log('i val', arr[i], 'j val', arr[j]);
      if (arr[i] == arr[j]) return true;

    }
  }
  return false;
}

console.log('has duplicate', hasDuplicateSlow([1, 2, 2, 3, 4]));
console.log('has duplicate', hasDuplicateSlow([1, 2, 3, 4]));
