import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchPlaylists } from '../actions/playlistActions';

import NewPlaylistForm from '../components/NewPlaylistForm'
import PlaylistList from '../components/PlaylistList'
import PlaylistComponent from '../components/PlaylistComponent'


class HomePage extends Component {

  componentDidMount() {
    this.props.fetchPlaylists()
  }

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

const mapStateToProps = state => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, {fetchPlaylists})(HomePage);
//export default HomePage
