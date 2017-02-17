import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, Link } from 'react-router'

//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.querySelector('#root'))
