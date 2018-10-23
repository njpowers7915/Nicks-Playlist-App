import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import NavBar from './NavBar';
import WelcomePage from '../components/WelcomePage'
import Signup from './Signup'
//import Login from './Login'
//import User from '../components/User'
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
