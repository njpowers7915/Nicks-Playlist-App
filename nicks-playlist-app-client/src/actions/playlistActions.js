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


/*
const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
export function playlistsAreLoading(bool) {
  return {
    type: 'PLAYLISTS_ARE_LOADING',
    isLoading: bool
  }
}

export function playlistIsLoading(bool) {
  return {
    type: 'PLAYLIST_IS_LOADING',
    isLoading: bool
  }
}

export function fetchPlaylistsSuccess(playlists) {
  return {
    type: 'FETCH_PLAYLISTS_SUCCESS',
    playlists
  }
}

export function fetchSinglePlaylistSuccess(playlist) {
  return {
    type: 'FETCH_SINGLE_PLAYLIST_SUCCESS',
    playlist
  }
}


// ** Async Actions **
export function fetchPlaylistsData() {
  return dispatch => {
    dispatch(playlistsAreLoading(true));
    fetch(`${API_URL}/playlists`)
      .then(response => {
        dispatch(playlistsAreLoading(false))
        return response.json()
      })
      .then(playlists => dispatch(fetchPlaylistsSuccess(playlists.data)))
      .catch(error => console.log(error));
  }
}

export function fetchPlaylist(id) {
  return dispatch => {
    dispatch(playlistIsLoading(true));
    fetch(`${API_URL}/playlists/${id}`)
      .then(response => {
        dispatch(playlistIsLoading(false))
        return response.json()
      })
      .then(playlist => dispatch(fetchSinglePlaylistSuccess(playlist.data)))
      .catch(error => console.log(error));
  }
}
*/
