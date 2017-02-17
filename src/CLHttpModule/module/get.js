import CONFIG from './config/config';

(function() {
  var GET = function(url, variables) {
    CONFIG.methos = 'GET';

    return fetch(url, CONFIG);
  };

  module.exports = GET;
})();
