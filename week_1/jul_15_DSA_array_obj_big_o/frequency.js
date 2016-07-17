'use strict';

function frequency(arr) {
  let accum = {};
  accum.first = {};
  accum.common = {};

  for (var i = 0; i < arr.length; i++) {
    var aword = arr[i];
    console.log('aword', aword);
    let firstChar = aword.charAt(0);
    if (!accum.first[firstChar]) {
      accum.first[firstChar] = 1;
    } else {
      accum.first[firstChar]++;
    }

    for (var j = 0; j < aword.length; j++) {
      //console.log(aword,j);
      let char = aword.charAt(j);
      console.log('char', char);


      if (!accum.common[char]) {
        accum.common[char] = 1;
      } else {
        accum.common[char]++;
      }
    }

  }
  //get maxes from accumulators
  var firstMax = {
    char: null,
    total: 0
  };
  for (let key in accum.first) {
    if (accum.first[key] > firstMax.total) {
      firstMax.char = key;
      firstMax.total = accum.first[key];
    }
  }
  var firstCommon = {
    char: null,
    total: 0
  };
  for (let key in accum.common) {
    if (accum.common[key] > firstCommon.total) {
      firstCommon.char = key;
      firstCommon.total = accum.common[key];
    }
  }

  return {
    freq1: firstMax,
    freq2: firstCommon
  };
}

console.log('has duplication', frequency(['apple', 'pear', 'orange', 'peach']));
//console.log('has duplication', frequency([1, 2, 3, 4]));
