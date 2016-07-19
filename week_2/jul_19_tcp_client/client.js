'use strict';
const net = require('net');

let chomp = function(string) {
  while(string[string.length - 1] === '\n' || string[string.length - 1] === '\r')
    string = string.slice(0, string.length - 1);
  return string;
};

const client = net.connect({port: 3000});
let name = process.argv[2];
process.stdin.on('data', function(data) {
  if (data.toString().indexOf('/nick') === 0) 
    name = chomp((data.toString().split(' '))[1]);
  else
    client.write(name + ': ' + data.toString());
  process.stdout.write(name + '>');
});
process.stdout.write(name + '>');

client.pipe(process.stdout);
client.on('data', function() {
  process.stdout.write(name + '>');
});
