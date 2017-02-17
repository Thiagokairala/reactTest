function AAA() {
  var _public = {};

  _public.test = function() {
    return fetch('http://coolin.com.br', {
      method: 'GET',
      headers: [],
      mode: 'cors',
      cache: 'default'
    })
  }

  return _public;
};

export default AAA();
