function playlistsReducer(state = {loading: false, playlists: []}, action) {
  switch (action.type) {
    case 'LOADING_PLAYLISTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_PLAYLISTS':
      return {loading: false, playlists: action.payload};
    /*
    case 'CREATE_PLAYLIST_SUCCESS':
      return state.concat(action.playlist);

    case 'FETCH_PLAYLIST':
      return action.playlist;
    */
    default:
      return state;
  }
}

export default playlistsReducer
