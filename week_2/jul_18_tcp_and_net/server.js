'use strict';

const net = require('net');

let clients = [];
let server = net.createServer(function(socket) {
  clients.push(socket);

  console.log('connected');
  socket.write('hello from the server\n');
  socket.pipe(process.stdout);
  socket.on('data', function(data) {
    clients.forEach(function(client) {
      if (client !== socket)
        client.write(data.toString());
    });

    if (data.toString() === 'END\r\n')
      socket.end();
  });

  socket.on('end', function() {
    console.log('disconnected');
    clients.splice(clients.indexOf(socket), 1);
  });
});

server.listen(3000, function() {
  console.log('server up');
});
