'use strict';
const EE = require('events');
const inherits = require('util').inherits;

var MyAwesomeConstructor = module.exports = exports = function() {
  this.data = {something: 'awesome'};
}

inherits(MyAwesomeConstructor, EE);

MyAwesomeConstructor.prototype.runThis = function(input) {
  return 'awesome! ' + input;
};
