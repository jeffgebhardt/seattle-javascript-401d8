'use strict';

const fsPromise = require('./lib/fs_promise');
let file = fsPromise(process.argv[2]);
console.log('hello from index');
file.then((data) => {
  console.log(data.toString('base64'));
  return data;
}, () => process.exit(1));

