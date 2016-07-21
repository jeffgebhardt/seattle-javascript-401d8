'use strict';

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  var file, statusCode;
  let parsed = url.parse(req.url, true);
  debugger;
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    file = fs.createReadStream(__dirname + '/index.html');
    statusCode = 200;
  } else {
    file = fs.createReadStream(__dirname + '/four_oh_four.html');
    statusCode = 404;
  }

  res.writeHead(statusCode, {
    "Content-Type": "text/html"
  });
  
  file.pipe(res);
}).listen(3000, () => {
  console.log('server up');
});
