import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

import HomePage from './HomePage';
import NavBar from './NavBar';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-routes">
          <Route exact path='/' render={() => <Redirect to="/playlists" />} />
        </div>
        <div className="app-body">
          <NavBar />
          <Route path="/playlists" component={HomePage} />
        </div>
      </div>
    );
  }
}

export default App;
