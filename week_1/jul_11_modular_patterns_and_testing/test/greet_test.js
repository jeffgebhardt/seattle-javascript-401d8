const expect = require('chai').expect;
const greet = require('../lib/greet');

describe('the greet function', function() {
  it('should greet the world', function() {
    expect(greet()).to.eql('hello world');
  });
});
