const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  var index = fs.createReadStream(__dirname + '/index.html');
  index.pipe(res);
}).listen(3000, () => {
  console.log('server up');
});
