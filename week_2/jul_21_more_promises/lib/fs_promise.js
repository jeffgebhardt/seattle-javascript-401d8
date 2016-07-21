'use strict';
const fs = require('fs');

module.exports = exports = function(fileName) {
  let promise = new Promise((resolve, reject) => {
    console.log('promise created');
    fs.readFile(fileName, (err, data) => {
      if (err) return reject(err);
      console.log('about to resolve');
      resolve(data);
    });
  });
  promise.catch((err) => {
    console.log(err);
    console.log(err.stack);
    throw err;
  });
  promise.then((data) => {
    console.log(data.toString());
    return data;
  });
  return promise;
};
