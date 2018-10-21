import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import NewPlaylistForm from '../components/NewPlaylistForm'
import PlaylistList from '../components/PlaylistList'
import PlaylistComponent from '../components/PlaylistComponent'


class HomePage extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <div className="home-page">
        <Route exact path={match.url} render={() =>
            <Link to="/playlists/new">Create a Playlist!</Link>} />
        <Switch>
          <Route exact path={match.url} component={PlaylistList} />
          <Route exact path={match.url + '/new'} component={NewPlaylistForm} />
          <Route exact path={match.url + '/:playlistId'} component={PlaylistComponent} />
        </Switch>
      </div>
    );
  }
}

export default HomePage;
