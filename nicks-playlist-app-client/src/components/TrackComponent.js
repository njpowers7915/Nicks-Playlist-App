import React from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const TrackComponent = ({ track }) =>
  <div className="track-component" id={track.id}>
    <li>{track.name} -- {track.artist} -- <AddButton /> OR <DeleteButton /></li>
  </div>
/*
const mapStateToProps = (state, ownProps) => {

  let track = state.tracks.find(playlist => track.id === ownProps.match.params.playlistId)
  debugger
  if (playlist) {
    return { playlist }
  } else {
    return { playlist: {} }
  }
}
*/
//export default connect(mapStateToProps)(PlaylistComponent)
export default TrackComponent
