const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setPlaylists = playlists => {
  return {
    type: 'FETCH_PLAYLISTS',
    playlists
  }
}

const setPlaylist = playlist => {
  return {
    type: 'FETCH_PLAYLIST',
    playlist
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

export function fetchPlaylist(id) {
  return dispatch => {
    return fetch(`${API_URL}/playlists/${id}`)
      .then(response => response.json())
      .then(playlist => dispatch(setPlaylist(playlist.data)))
      .catch(error => console.log(error));
  }
}
