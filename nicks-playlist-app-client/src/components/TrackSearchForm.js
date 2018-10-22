import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchTracks} from '../actions/trackActions';

class TrackSearchForm extends Component {

  componentDidMount() {
    this.props.fetchTracks()
  }

  render() {
    return (
      <div className="track-search-form">
        <h2>Search for tracks</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks
  }
}

export default connect(mapStateToProps, {fetchTracks})(TrackSearchForm);
/*
  render() {
    const { match, playlists } = this.props;

    return (
      <div className="home-page">
        <Route exact path={match.url} render={() =>
            <Link to="/playlists/new">Create a Playlist!</Link>} />
        <br></br>
        <Switch>
          <Route exact path={match.url} render={() =>
            <PlaylistList playlists={playlists} />} />
          <Route exact path={match.url + '/new'} component={NewPlaylistForm} />
          <Route exact path={match.url + '/:playlistId'} component={PlaylistComponent} />
        </Switch>
      </div>
    );
  }
}
*/
