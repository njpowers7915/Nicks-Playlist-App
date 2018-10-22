import React, { Component } from 'react';
//import { setPlaylist } from '../actions/playlistActions'
import { connect } from 'react-redux';

import TrackList from './TrackList';
import TrackSearchForm from './TrackSearchForm';

const PlaylistComponent = ({ playlist }) =>
  <div>
    <p>Name: {playlist.attributes.name}</p>
    <p>Description: {playlist.attributes.description}</p>
    <TrackSearchForm />
    <TrackList tracks={playlist.attributes.tracks}/>
  </div>

const mapStateToProps = (state, ownProps) => {

  let playlist = state.playlists.find(playlist => playlist.id === ownProps.match.params.playlistId)
  if (playlist) {
    return { playlist }
  } else {
    return { playlist: {} }
  }
}

export default connect(mapStateToProps)(PlaylistComponent)



/*
class PlaylistComponent extends Component {

  componentDidMount() {
    this.props.fetchPlaylist()
  }
/*
    const id = this.props.match.params.playlistId
    const API_URL = process.env.REACT_APP_API_URL
    return dispatch => {
      return fetch(`${API_URL}/playlists/${id}`)
        .then(response => response.json())
        .then(playlist => dispatch(this.setState({playlist: playlist.data})))
        .catch(error => console.log(error));
    }
  }


  renderPlaylist() {
    return(<div>
        <p>Name: {this.state.playlist.attributes.name}</p>
        <p>Description: {this.state.playlist.attributes.description}</p>
        <TrackSearchForm />
        <TrackList tracks={this.state.playlist.attributes.tracks}/>
      </div>
    )
  }

  render() {

    const { playlist } = this.props

    return (
      <div className="playlist-component">
        {this.renderPlaylist()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playlist: state.playlist
  }
}

export default connect(mapStateToProps)(PlaylistComponent);
*/
