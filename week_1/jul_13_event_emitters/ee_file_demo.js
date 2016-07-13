const fs = require('fs');
const EE = require('./our_ee');

var files = ['one.txt', 'two.txt', 'three.txt'];

var ee = new EE();

ee.on('filedone', function(data) {
  if(data) console.log(data.toString());
  if(files.length === 0) return;

  fs.readFile(files.pop(), function(err, data) {
    if(err) return console.log(err);
    ee.emit('filedone', data);
  });
});

ee.emit('filedone');
