const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setPlaylists = playlists => {
  return {
    type: 'GET_PLAYLISTS_SUCCESS',
    playlists
  }
}

const addPlaylist = playlist => {
  return {
    type: 'CREATE_PLAYLIST_SUCCESS',
    playlist
  }
}

export const updatePlaylistFormData = playlistFormData => {
  return {
    type: 'UPDATED_DATA',
    playlistFormData
  }
}

export const resetPlaylistForm = () => {
  return {
    type: 'RESET_PLAYLIST_FORM'
  }
}

export const addTrack = track => {
  return {
    type: 'ADD_TRACK_SUCCESS',
    track
  }
}

// ** Async Actions **
export function addTrackToPlaylist(playlist, track) {
  return dispatch => {
    return fetch(`${API_URL}/playlists/${playlist.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ track: track })
    })
      .then(response => response.json())
      .then(track => dispatch(addTrack(track.data)))
      .catch(error => console.log(error))
  }
}


export const fetchPlaylists = () => {
  return dispatch => {
    return fetch(`${API_URL}/playlists`)
      .then(response => response.json())
      .then(playlists => dispatch(setPlaylists(playlists.data)))
      .catch(error => console.log(error));
  }
}

export const createPlaylist = playlist => {
  return dispatch => {
    return fetch(`${API_URL}/playlists`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ playlist: playlist })
    })
      .then(response => response.json())
      .then(playlist => dispatch(addPlaylist(playlist.data)))
      //.then(playlists =>
      //  dispatch(setPlaylists(playlists)))
      .catch(error => console.log(error))
  }
}
