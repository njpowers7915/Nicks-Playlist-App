import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistList = ({playlists}) => {
  const renderPlaylists = playlists.map(playlist =>
    <li key={playlist.id}>
      <Link to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link>
    </li>
  )

  return (
    <div>
      {renderPlaylists}
    </div>
  )
}

export default PlaylistList

/*
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
*/


/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylistsData } from '../actions/playlistActions';

class PlaylistList extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div>
        {this.props.playlists.map((playlist) => (
          <li key={playlist.id}>
            <Link to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link>
          </li>
        ))}
      </div>
    )
  }
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

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylistsData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList);
*/
