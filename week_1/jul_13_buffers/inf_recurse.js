var someFunc = function(num) {
  console.log(num);
  someFunc(++num);
};

someFunc(0);
