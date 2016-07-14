#!/usr/bin/env node 
var async = require('../lib/async_work');

var asyncCli = function(writeStream) {
  var files = process.argv.slice(2);
  writeStream = writeStream || process.stdout;
  async(files, function(err, data) {
    if (err) return writeStream.write(err);  
    data.forEach(function(data) {
      writeStream.write(data.toString());
    });
  });
};

asyncCli();
