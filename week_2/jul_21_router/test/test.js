'use strict';

const http = require('http');
const Router = require('../lib/router');
const server = require('../server');
const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;

let routes = new Router('/api');

routes.get('/hello', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write('{"msg": "hello world"}');
  res.end();
});


routes.delete('/hello', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write('{"msg": "delete shit"}');
  res.end();
});

http.createServer(routes.route()).listen(8888, () => console.log('server up'));

describe('router', () => {
  it('should return what method we requested', (done) => {
    request('localhost:8888/api')
      .delete('/hello')
      .end((err, res) =>{
        console.log(res.text);
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        done();
      });
  });
});
