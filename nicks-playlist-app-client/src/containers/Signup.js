import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSignup = (event) => {
    event.preventDefault()
    if (this.props.signup(this.state)) {
      this.props.history.push('/playlists')
    } else {
      window.alert("An error occurred. Please try signing up again.")
    }
  }

  render() {
    return(
      <div className="signupForm">
        <form onSubmit={this.handleOnSignup}>
          <input type="text" name="username" id="username" placeholder="username"
            value={this.state.username} onChange={this.handleOnChange} />
          <input type="password" name="password" id="password" placeholder="password"
            value={this.state.password} onChange={this.handleOnChange} />
          <input type="email" name="email" id="email" placeholder="email"
            value={this.state.email} onChange={this.handleOnChange} />

          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default Signup = withRouter(connect(null, {signup})(Signup))
