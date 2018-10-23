import React, { Component } from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
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
    /*
    const loggedOut = (
      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </div>
    )
    const loggedIn = (
      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </div>
    )
    */
    return (
      <div className="App">
        <div className="nav-bar">
          <Route path="/"
            render={() => isAuthenticated
            ? <NavBar />
            : null } />
        </div>

        <Route path="/playlists"
          render={() => isAuthenticated
            ? <HomePage user={user} />
            : <WelcomePage />} />

        <Route exact path="/"
            render={() => isAuthenticated
              ? <Redirect to="/playlists" />
              : <WelcomePage />} />

        <Route exact path="/signup"
            render={() => isAuthenticated
              ? <Redirect to="/playlists" />
              : <Signup />} />

        <Route exact path="/login"
            render={() => isAuthenticated
              ? <Redirect to="/playlists" />
              : <Login />} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}



export default withRouter(connect(mapStateToProps, {})(App));
