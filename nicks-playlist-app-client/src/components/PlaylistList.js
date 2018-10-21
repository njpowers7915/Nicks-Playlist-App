import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import { fetchPlaylists } from '../actions/playlistActions';
//import PlaylistComponent from './containers/PlaylistComponent';

const PlaylistList = ({ playlists }) => {
  const renderPlaylists = playlists.map(playlist =>
    <Link style={{marginRight: '12px'}}
      key={playlist.id}
      to={`/playlists/${playlist.id}`} >{playlist.attributes.name}</Link>
  );

  return (
    <div>
      {renderPlaylists}
    </div>
  )
}

export default PlaylistList

/*
class PlaylistList extends Component {

  componentDidMount() {
    debugger
    this.props.fetchPlaylists()
  }

  renderPlaylists() {
    debugger
    this.props.playlists.map(playlist =>
      <li key={playlist.id}>
        <Link style={{marginRight: '12px'}}
          key={playlist.id}
          to={`/playlists/${playlist.id}`} >{playlist.attributes.name}</Link>
      </li>
    );
  }

  render() {
    return (
      <div className="playlist-list">
        <li>Link to Playlist 1</li>
        {this.renderPlaylists}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistList);
*/
