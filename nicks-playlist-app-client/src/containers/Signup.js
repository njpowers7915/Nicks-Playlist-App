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
    const {name, value} = e.target;
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
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="username" placeholder="username"
            value={this.state.username} onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password"
            value={this.state.password} onChange={this.handleChange} />
          <input type="email" name="email" placeholder="email"
            value={this.state.email} onChange={this.handleChange} />

          <input type="submit" value="Create Account" />
        </form>
      </div>
    )
  }
}

export default Signup = withRouter(connect(null, {signup})(Signup))
