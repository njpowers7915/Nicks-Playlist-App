import React from 'react';
import {connect} from 'react-redux'
import {fetchTracks} from '../actions/trackActions';

class TrackSearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTrack: ''
    }
  }

  render() {

    return (
      <div>
        <h2>Search for Tracks</h2>
          {/* <datalist id="tracks">
            {this.renderTracks}
          </datalist> */}
      </div>
    )
  }
}
export default TrackSearchForm

/*
  componentDidMount() {
    this.props.fetchTracks()
  }

  renderTracks = () => {
    return this.props.tracks.map(track =>
      <option key={track.id} value={`${track.name} --- ${track.artist}`}>
    )
  }

  render() {
    return (
      <div>
        <h2>Search for Tracks</h2>
          <datalist id="tracks">
            {this.renderTracks}
          </datalist>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tracks: state.tracks
  }
}

export default connect(mapStateToProps, {fetchTracks})(TrackSearchForm);





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
