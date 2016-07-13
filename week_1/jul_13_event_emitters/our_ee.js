var EE = module.exports = exports = function() {
  this.events = {};
};

EE.prototype.on = function(string, func) {
  this.events[string] = func;
};

EE.prototype.emit = function(eventStr, data) {
  this.events[eventStr](data);
};
