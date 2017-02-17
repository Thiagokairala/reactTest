import CONFIG from './config/config';

(function() {
  var PUT = function(url, variables) {
    CONFIG.methos = 'PUT';

    return fetch(url, CONFIG);
  };

  module.exports = PUT;
})();
