const expect = require('chai').expect;

describe('an async test', function() {
  it('should fail', function(done) {
    this.timeout(500);
    process.nextTick(() => {
      expect(true).to.eql(true);
    });	
  });
});
