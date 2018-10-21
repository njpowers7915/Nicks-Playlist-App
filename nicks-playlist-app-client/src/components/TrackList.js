import React, { Component } from 'react';

import TrackComponent from './TrackComponent';

class TrackList extends Component {
  render() {
    return (
      <div className="track-list">
        <li><TrackComponent /></li>
        <li><TrackComponent /></li>
      </div>
    );
  }
}

export default TrackList;
