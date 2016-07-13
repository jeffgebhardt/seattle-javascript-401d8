var recurse = function(num) {
  console.log(num);
  if (num < 10) {
    process.nextTick(function() {
      recurse(++num);
    });
  }
};

recurse(0);
recurse(0);
