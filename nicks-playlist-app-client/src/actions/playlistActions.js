const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setPlaylists = playlists => {
  return {
    type: 'FETCH_PLAYLISTS',
    playlists
  }
}

const addPlaylist = playlist => {
  return {
    type: 'CREATE_PLAYLIST_SUCCESS',
    playlist
  }
}

export function createNewPlaylist(playlist) {
  return {
    type: 'ADD_PLAYLIST',
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

// ** Async Actions **
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
      .then(playlist => {
        dispatch(addPlaylist(playlist))
        dispatch(resetPlaylistForm())
      })
      .catch(error => console.log(error))
  }
}
