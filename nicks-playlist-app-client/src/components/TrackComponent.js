import React from 'react';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';

const TrackComponent = (props) =>
  <div className="track-component" key={props.track.id}>
    <li>{props.track.name} -- {props.track.artist} --
    {props.onAddClick ?
      <AddButton /> : null }
    {props.onRemoveClick ?
      <DeleteButton /> : null }
    <AddButton /> OR <DeleteButton /></li>
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
