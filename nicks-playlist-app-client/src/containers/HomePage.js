import React, { Component } from 'react';
import PlaylistList from '../components/PlaylistList';


class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        Link to Playlist Form
        <PlaylistList />
      </div>
    );
  }
}

export default HomePage;
