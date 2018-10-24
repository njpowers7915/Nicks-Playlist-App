import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import NavBar from './NavBar';
import WelcomePage from '../components/WelcomePage'
import Signup from './Signup'
import Login from './Login'
//import User from '../components/User'
import '../App.css';

class App extends Component {

  render() {
    const { isAuthenticated, user } = this.props

    const loggedOut = (
      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </div>
    )
    const loggedIn = (
      <div>
        <Route path="/playlists" render={() => <HomePage user={user} />} />
      </div>
    )

    return (
      <Router>
        <div className="App">
          <div className="nav-bar">
            <Route path="/"
              render={() => isAuthenticated
                ? <NavBar />
                : null } />
          </div>
          <div id="main-div">
            {isAuthenticated ? loggedIn : loggedOut}
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}



export default connect(mapStateToProps, {})(App);
