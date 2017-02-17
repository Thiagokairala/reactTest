import CONFIG from './config/config';

(function() {
  var DELETE = function(url, variables) {
    CONFIG.methos = 'DELETE';

    return fetch(url, CONFIG);
  };

  module.exports = DELETE;
})();
