const expect = require('chai').expect;
const cowsay = require('../lib/cowsay');
var cowsaycli = require('../bin/cowsay');

describe('cowsaycli', function() {
  before(function() {
    this.argv_backup = process.argv;
    process.argv = [null, null, 'test'];
  });

  after(function() {
    process.argv = this.argv_backup;
  });

  it('should read from process.argv', function() {
    var called = false;
    var testStream = {
      write: function(input) {
        called = true;
        expect(input).to.eql(cowsay('test'));
      }
    };
    cowsaycli(undefined, testStream);
    expect(called).to.eql(true);
  });
});
