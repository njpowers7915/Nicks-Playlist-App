function playlistsReducer(state = [], action) {
  switch (action.type) {
    /*
    case 'FETCH_PLAYLISTS_SUCCESS':
      return action.playlists;

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
