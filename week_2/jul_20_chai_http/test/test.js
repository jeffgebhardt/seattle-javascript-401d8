'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;


//TODO load server
require('../server');

describe('Http Server testing', () => {

  it('GET / return Today is:Wed', (done) => {

    request('localhost:3000')
      .get('/')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200, 'this should be the code');
        expect(res.text).to.eql('Today is:' + 'Wed' + '\n');
        done();
      });

  });

  it('POST / return day of week like Wed based on month, day, year', (done) => {
    request('localhost:3000')
      .post('/')
      .send({
        month: 7,
        day: 20,
        year: 2016
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200, 'this should be the code');
        expect(res.text).to.eql('Wed');
        done();
      });
  });




});
