'use strict';

//using splice
function myShift(arr) {
  if (!arr || arr.length == 0) return null;
  let shiftVal = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (i > arr.length - 1) {
      arr.splice([i - 1], 1);
    } else {
      arr[i - 1] = arr[i];
    }
  }
}
let arr1 = [1, 2, 3, 4, 5];
console.log('1st shift', myShift(arr1), arr1);
console.log('2nd shift', myShift(arr1), arr1);

//resetting length
function myLengthShift(arr) {
  if (!arr || arr.length == 0) return null;
  let shiftVal = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (i <= arr.length - 1) {
      arr[i - 1] = arr[i];
    }
  }
  arr.length = arr.length - 1;  //property change by ref
}
let arr2 = [1, 2, 3, 4, 5];
console.log('1st myLengthShift', myLengthShift(arr2), arr2);
console.log('2nd myLengthShift', myLengthShift(arr2), arr2);
