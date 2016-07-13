const fs = require('fs');
fs.readFile('somefile.txt', function(err, data) {
  if (err) return console.log(err);

  console.log(data.toString());
});

process.nextTick(() => {
  console.log('something');
});

process.nextTick(() => {
  console.log('hello from next tick');
  fs.readFile('two.txt', function(err, data) {
    if (err) return console.log(err);

    console.log(data.toString());
  });
});

console.log('not next tick');
