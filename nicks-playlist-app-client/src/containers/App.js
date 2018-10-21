import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';

import HomePage from './HomePage';
import NavBar from './NavBar';

import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>  
          <Route exact path='/' render={() => <Redirect to="/playlists" />} />
        </head>
        <body>
          <NavBar />
          <Route path="/playlists" component={HomePage} />
        </body>
      </div>
    );
  }
}

export default App;
