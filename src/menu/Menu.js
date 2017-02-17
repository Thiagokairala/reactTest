import React, { Component } from 'react';
import AAA from '../http/aaa';

class Menu extends Component {
  alertOnPage() {
    AAA.test().then((response)=> console.log(response));
  };

  render() {
    return (
      <div className="App">
        <h1> Eu sou um menu</h1>

        <button onClick={() => this.alertOnPage()}>Teste</button>
      </div>
    );
  }
}

export default Menu
