import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../actions/playlistActions';

class PlaylistList extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  renderPlaylists() {
    return this.props.playlists.map(playlist =>
      <li key={playlist.id}>
        <Link to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link>
      </li>
    );
  }

  render() {
    return (
      <div className="playlist-list">
        {this.renderPlaylists()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistList);
