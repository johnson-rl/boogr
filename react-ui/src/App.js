import React, { Component } from 'react';
import './App.css';
import Game from './game';
import Question from './question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question />
      </div>
    );
  }
}

export default App;
