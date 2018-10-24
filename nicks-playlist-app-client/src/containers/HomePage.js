import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPlaylists } from '../actions/playlistActions';

import NewPlaylistForm from '../components/NewPlaylistForm'
import PlaylistList from '../components/PlaylistList'
import PlaylistComponent from '../components/PlaylistComponent'


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playlists: props.playlistState.playlists
    }
  }

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playlistState.playlists !== prevProps.playlistState.playlists) {
      this.setState({
        playlists: this.props.playlistState.playlists
      })
    }
  }

  render() {
    const playlists = this.state.playlists
    const match = this.props
    const playlistsDiv = (
      <div className="playlists">
        <Switch>
          <Route exact path={match.url + '/new'} component={NewPlaylistForm} />

          <Route exact path={match.url + '/:playlistId'} component={PlaylistComponent} />

          <Route exact path={match.url} render={() =>
              <PlaylistList playlists={playlists} />} />
        </Switch>
      </div>
    )
    const loading = <p>Loading playlists...</p>

    return (
      <div>
        { this.props.loadingPlaylists ? loading : playlistsDiv }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playlistState: state.playlists,
    loadingPlaylists: state.playlists.loading,
    userId: state.auth.currentUser.id
  }
}
export default connect(mapStateToProps, {fetchPlaylists})(HomePage)
/*
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
*/

//export default HomePage
