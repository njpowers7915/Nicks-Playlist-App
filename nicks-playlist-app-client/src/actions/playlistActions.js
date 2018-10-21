const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setPlaylists = playlists => {
  return {
    type: 'FETCH_PLAYLISTS',
    playlists
  }
}


// ** Async Actions **
export function fetchPlaylists() {
  return function(dispatch){
    dispatch({type: 'FETCH_PLAYLISTS'})
    return fetch(`${API_URL}/playlists`)
      .then(response => {
        return response.json()
      }).then(playlists => dispatch(setPlaylists(playlists)))
      .catch(error => console.log(error));
  }
}
