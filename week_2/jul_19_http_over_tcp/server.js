const net = require('net');

net.createServer((socket) => {
  socket.pipe(process.stdout);
  socket.write('ajsdflkjsalkdfjsaklf');
  socket.on('data', function() {
    socket.end();
  });
}).listen(3000);
