import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <h3>Welcome to Nicks Playlist App! -- <Link to="/playlists">Home</Link></h3>
      </div>
    );
  }
}

export default NavBar;
