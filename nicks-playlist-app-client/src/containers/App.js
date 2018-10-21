import React, { Component } from 'react';

import HomePage from './HomePage';
import NavBar from './NavBar';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
