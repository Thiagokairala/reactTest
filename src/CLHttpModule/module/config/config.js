(function() {
  var OPTIONS = {
    _public: {},
    _private: {}
  };

  OPTIONS._public.headers = [];
  OPTIONS._public.mode = 'cors';
  OPTIONS._public.cache = 'default';

  module.exports = OPTIONS._public;
})();
