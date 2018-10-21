import React, { Component } from 'react';

import TrackList from './TrackList';
import TrackSearchForm from './TrackSearchForm';

class PlaylistComponent extends Component {
  render() {
    return (
      <div className="playlist-component">
        Name
        Description
        <FindTracksForm />
        <TrackList />
      </div>
    );
  }
}

export default PlaylistComponent;
