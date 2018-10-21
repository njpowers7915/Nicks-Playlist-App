import React, { Component } from 'react';

import PlaylistComponent from './containers/PlaylistComponent';

class PlaylistList extends Component {
  render() {
    return (
      <div className="playlist-list">
        <li>Link to Playlist 1</li>
        <li>Link to Playlist 2</li>
      </div>
    );
  }
}

export default PlaylistList;
