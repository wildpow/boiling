import React, { Component } from 'react';
import Calculator from './version3/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Temperature Calculator
          for the boiling point of water.
        </h1>
        <Calculator/>
      </div>
    );
  }
}

export default App;
