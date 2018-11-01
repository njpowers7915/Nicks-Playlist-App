
import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistList = ({playlists, onLike, likes}) => {
  const renderPlaylists = playlists.map(playlist =>
    <ul key={playlist.id}>
      <li><Link to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link> --
      <button onClick={onLike}>Like</button> -- Likes {likes} </li>
    </ul>
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

import PlaylistComponent from './PlaylistComponent'
import { fetchPlaylists } from '../actions/playlistActions';

class PlaylistList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: this.props.playlists
    }
  }

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  render() {
    const renderPlaylists = this.state.playlists.map(playlist =>
      <ul key={playlist.id}>
        <li><Link to={`/playlists/${playlist.id}`}>{playlist.attributes.name}</Link></li>
      </ul>
    )

    return (
      <div>
        {this.renderPlaylists}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(PlaylistList);
*/
