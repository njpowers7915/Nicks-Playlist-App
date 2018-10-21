import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlistActions';
//import PlaylistComponent from './containers/PlaylistComponent';

class PlaylistList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    debugger
    this.props.fetchPlaylists()
  }

  render() {
    return (
      <div className="playlist-list">
        <li>Link to Playlist 1</li>
        <li>Link to Playlist 2</li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, {fetchPlaylists})(PlaylistList);
