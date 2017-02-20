import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import Menu from './menu/Menu'

//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/menu" component={Menu}></Route>
  </Router>
), document.querySelector('#root'))
