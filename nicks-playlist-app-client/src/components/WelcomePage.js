import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () =>
  <div className="welcome-page">
    <h1>Welcome to Nicks Playlist App!</h1>
    <br></br>
    <h3><Link to="/signup">Create Account</Link></h3>
    <h3><Link to="/login">Login</Link></h3>
  </div>

export default WelcomePage
