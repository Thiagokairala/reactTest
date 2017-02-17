import CONFIG from './config/config';

(function() {
  var POST = function(url, variables) {
    CONFIG.methos = 'POST';

    return fetch(url, CONFIG);
  };

  module.exports = POST;
})();
