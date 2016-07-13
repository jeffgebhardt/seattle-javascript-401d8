var addOne = function(num) {
  return ++num;
};

var a = 0;
console.log('before: ' + a);
console.log('return: ' + addOne(a));
console.log('after: ' + a);
