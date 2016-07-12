var cowsay = require('cowsay');
module.exports = function(text) {
  return(cowsay.say({text}));
};
