import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Menu from './menu/Menu'
import Page2 from './page2/Page2'

//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Menu} />
      <Route path="stuff" component={Page2} />
    </Route>
    <Route path="/menu" component={Menu}></Route>
  </Router>
), document.querySelector('#root'))
