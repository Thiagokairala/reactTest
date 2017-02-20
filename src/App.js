import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, IndexLink } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/menu">ir pro menu</Link>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="teste" >Home</IndexLink></li>
          <li><Link to="/stuff" activeClassName="teste" >Stuff</Link></li>
          <li><Link to="/contact" activeClassName="teste" >Contact</Link></li>
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
