import React from 'react';

import TrackComponent from './TrackComponent';

const TrackList = ({tracks}) => {
  const renderTracks = tracks.map(track =>
    <div key={track.id}>
      <TrackComponent track={track}/>
    </div>
  )

  return (
    <div>
      {tracks.length === 0 ?
        ( <h2>Empty Playlist. Please add tracks</h2> ) : renderTracks }
    </div>
  )
}

export default TrackList
/*
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
*/
