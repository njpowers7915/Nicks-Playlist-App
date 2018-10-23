import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnLogin = (event) => {
    event.preventDefault()
    if (this.props.authenticate(this.state)) {
      this.props.history.push('/playlists')
    } else {
      window.alert("An error occurred. Please try logging in again.")
    }
  }

  render() {
    return(
      <div className="loginForm">
        <h2>Log In</h2>
        <form onSubmit={this.handleOnLogin} >
        <input type="text" name="username" placeholder="username"
          value={this.state.username} onChange={this.handleChange} />
        <input type="password" name="password" placeholder="password"
          value={this.state.password} onChange={this.handleChange} />
        <input type="submit" value="Login!" />
        </form>
      </div>
    )
  }
}

export default Login = withRouter(connect(null, {authenticate})(Login))
