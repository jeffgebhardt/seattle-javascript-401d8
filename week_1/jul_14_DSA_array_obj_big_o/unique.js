'use strict';

const unique = function(arr) {
  let obj = {};
  arr.forEach((item) => {
    if (!obj[item]) {
      obj[item] = item;
    }
  });
  return Object.keys(obj).map(function(key) {
    return obj[key];
  });
};

console.log('Unique [1,2,1,1,3,4,5]', unique([1, 2, 1, 1, 3, 4, 5]));
