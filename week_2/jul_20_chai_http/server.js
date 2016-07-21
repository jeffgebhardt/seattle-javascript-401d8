'use strict';
var http = require('http');


http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/') {
    res.write('Today is:' + getMyDay() + '\n');
    res.end();
  }
  if (req.method === 'POST' && req.url === '/') {
    var body = '';
    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      debugger;
      let jsonObj = JSON.parse(body);
      res.write(getMyDay(jsonObj));
      res.end();
    });

  }

}).listen(3000, console.log('up on 3000'));

function getDayOfWeek(dayInt) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[dayInt];
}

function getMyDay(input) {
  if (input) return getDayOfWeek(new Date(input.year, input.month - 1, input.day).getDay());
  return getDayOfWeek(new Date().getDay());
}
