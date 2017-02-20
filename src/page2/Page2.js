import React, { Component } from 'react';
import teste from '../CLHttpModule/module';

class Page2 extends Component {
  alertOnPage() {
    console.log(teste)
  };

  render() {
    return (
      <div className="App">
        <h1> Eu sou um menu da página 2</h1>

        <button onClick={() => this.alertOnPage()}>Teste</button>
      </div>
    );
  }
}

export default Page2
