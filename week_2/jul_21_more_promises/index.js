'use strict';

const fsPromise = require('./lib/fs_promise');
let fileNames = process.argv.slice(2);
let files = fileNames.map((file) => fsPromise(file));
files.map((promise) => promise.catch(() => process.exit(1)));
