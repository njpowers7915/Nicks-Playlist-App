import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../actions/playlistActions'

class NewPlaylistForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { createPlaylist, history } = this.props
    createPlaylist(this.state)
    history.push('/playlists')
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="new-playlist-form">
        <h2>Create a Playlist</h2>
        <form onSubmit={this.handleOnSubmit} >
          <input type='text' placeholder='Name' name='name' onChange={this.handleOnChange} />
          <input type="text" placeholder="Description" name="description" onChange={this.handleOnChange} />
          <input type="submit" value="Create Playlist" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createPlaylist })(NewPlaylistForm);
