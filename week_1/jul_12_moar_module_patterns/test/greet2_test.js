const expect = require('chai').expect;
const greet2 = require('../lib/greet2');

describe('greet2 electric boogaloo', function() {
  it('should greet someone', function() {
    expect(greet2.greet('test')).to.eql('hello test');
  });
});
