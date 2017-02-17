import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../src/App';


// Não mocado
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
});

// Mocado
it('renders without crashing', () => {
  shallow(<App />);
});
