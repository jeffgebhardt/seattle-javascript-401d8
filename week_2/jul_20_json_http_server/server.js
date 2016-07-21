'use strict';
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let file;
  let reqArr = req.url.split('/');
  let filename = reqArr[reqArr.length - 1];
  debugger;
  if (req.method === 'POST') {
    file = fs.createWriteStream(__dirname + '/data/' + filename);
    file.on('error', (err) => {
      if (err.text.indexOf('ENOENT') === -1) console.log(err);
      res.writeHead(500, {
        'Content-Type': 'application/json' 
      });
      res.write('file for ' + filename + ' alread exists, try a PUT instead');
      res.end();
    });
    req.pipe(file);
    req.on('end', () => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.write('{"msg":"success"}');
      res.end();
    });
  }
  if (req.method === 'GET') {
    file = fs.createReadStream(__dirname + '/data/' + filename);
    file.on('error', () => {
      res.writeHead(404, {
        'Content-Type': 'application/json'
      });
      res.write('{"msg":"could not find file"}');
      res.end();
    });
    file.pipe(res);
  }
}).listen(3000, () => console.log('server up'));
