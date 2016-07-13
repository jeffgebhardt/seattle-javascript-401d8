var EE = require('events');

var ee = new EE();
ee.on('myEvent', function() {
  console.log('event triggered');
});

ee.emit('myEvent');
console.log('end of file');
