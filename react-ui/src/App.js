import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test.js';

class App extends Component {
  render() {
    return (
      <div className= "col-xs-6 game">
        <Test/>
      </div>
    );
  }
}

export default App;
