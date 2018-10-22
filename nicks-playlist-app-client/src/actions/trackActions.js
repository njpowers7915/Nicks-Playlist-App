const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
const setPlaylists = tracks => {
  return {
    type: 'FETCH_TRACKS',
    tracks
  }
}

// ** Async Actions **
export const fetchTracks = () => {
  return dispatch => {
    return fetch(`${API_URL}/tracks`)
      .then(response => response.json())
      .then(tracks => dispatch(setPlaylists(tracks.data)))
      .catch(error => console.log(error));
  }
}
