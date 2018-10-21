import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlistActions';
//import PlaylistComponent from './containers/PlaylistComponent';

class PlaylistList extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {

    const renderPlaylists = () => {
      return this.props.playlists.map(playlist =>
        <li key={playlist.id}>
          <Link style={{marginRight: '12px'}}
            key={playlist.id}
            to={`/playlists/${playlist.id}`} >{playlist.attributes.name}</Link>
        </li>
      );
    }

    return (
      <div className="playlist-list">
        <li>Link to Playlist 1</li>
        {renderPlaylists}
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
