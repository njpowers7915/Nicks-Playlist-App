import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNewPlaylist } from '../actions/playlistActions'
/*
class NewPlaylistForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPlaylistFormData = Object.assign({}, this.props.playlistFormData, {
      [name]: value
    })
    this.props.updatePlaylistFormData(currentPlaylistFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createPlaylist(this.props.playlistFormData)
    this.props.history.push('/playlists')
  }

  render() {
    const { name, description } = this.props.playlistFormData;

    return (
      <div>
        Create A Playlist
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="description"
              value={description}
            />
          </div>

          <button type="submit">Create Playlist</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playlistFormData: state.playlistFormData
  }
}

export default connect(mapStateToProps, { updatePlaylistFormData, createPlaylist })(NewPlaylistForm);

*/

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
    const { createNewPlaylist, history } = this.props
    createNewPlaylist(this.state)
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

export default connect(null, { createNewPlaylist })(NewPlaylistForm);
