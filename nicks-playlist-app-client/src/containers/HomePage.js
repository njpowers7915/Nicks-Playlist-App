import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchPlaylists } from '../actions/playlistActions';

import NewPlaylistForm from '../components/NewPlaylistForm'
import PlaylistList from '../components/PlaylistList'
import PlaylistComponent from '../components/PlaylistComponent'


class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }

  componentDidMount() {
    this.props.fetchPlaylists()
  }

  onLike = () => {
    this.setState({ likes: this.state.likes += 1 })
    //return this.state.likes
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
            <PlaylistList playlists={playlists} onLike={this.onLike} likes={this.state.likes}/>} />
          <Route exact path={match.url + '/new'} component={NewPlaylistForm} />
          <Route exact path={match.url + '/:playlistId'} component={PlaylistComponent} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    playlists: state.playlists,
    //likes: state.likes
  }
}

export default connect(mapStateToProps, {fetchPlaylists})(HomePage);
//export default HomePage
