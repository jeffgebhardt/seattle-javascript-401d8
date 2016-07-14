const expect = require('chai').expect;
const fs = require('fs');

const async = require('../lib/async_work');

describe('async reading of files', function() {
  var fileData = [];
  before(function(done) {
    fs.readFile(__dirname + '/one.txt', function(err, data) {
      fileData.push(data.toString());
      fs.readFile(__dirname + '/two.txt', function(err, data) {
        fileData.push(data.toString());
        fs.readFile(__dirname + '/three.txt', function(err, data) {
          fileData.push(data.toString()) ;
          done();
        });
      });
    });
  });

  it('should read the files in order', function(done) {
    async([__dirname + '/one.txt', __dirname + '/two.txt', __dirname + '/three.txt'], function(err, fileArr) {
      expect(err).to.eql(null);
      expect(fileArr[0].toString()).to.eql(fileData[0]);
      expect(fileArr[1].toString()).to.eql(fileData[1]);
      expect(fileArr[2].toString()).to.eql(fileData[2]);
      done();
    });
  });
});
