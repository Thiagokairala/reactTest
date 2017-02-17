import React, { Component } from 'react';
import teste from '../CLHttpModule/module';

class Menu extends Component {
  alertOnPage() {
    console.log(teste)
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
