var addOneObj = function(obj) {
  return obj.value++;
};

var addOne = function(num) {
  return ++num;
};

var a = {value: 0};
console.log('before: ' + a.value);
console.log('return: ' + addOneObj(a));
console.log('after: ' + a.value);

console.log('before: ' + a.value);
console.log('return: ' + addOne(a.value));
console.log('after: ' + a.value);
