import React, { Component } from 'react';

import PlaylistComponent from './PlaylistComponent';

class PlaylistList extends Component {
  render() {
    return (
      <div className="playlist-list">
        <PlaylistComponent />
        <PlaylistComponent />
      </div>
    );
  }
}

export default PlaylistList;
