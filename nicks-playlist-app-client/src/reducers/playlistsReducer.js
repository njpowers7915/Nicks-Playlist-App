export default (state = [], action) => {
  switch(action.type) {
    //case 'LOADING_PLAYLISTS':
    //  return Object.assign({}, state);

    case 'GET_PLAYLISTS_SUCCESS':
      return action.playlists;

    case 'CREATE_PLAYLIST_SUCCESS':
      const playlist = Object.assign({}, action.playlist, { id: state.length + 1 } )
      return [ ...state, playlist];

    //case 'FETCH_PLAYLIST':
    //  return action.playlist;

    default:
      return state;
  }
}


/*
export function playlistsReducer(state = [], action) {
  switch(action.type) {
    case 'FETCH_PLAYLISTS_SUCCESS':
      return action.playlists;
    default:
      return state;
  }
}

export function playlistsAreLoading(state = false, action) {
  switch (action.type) {
    case 'PLAYLISTS_ARE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function playlistReducer(state = '', action) {
  switch(action.type) {
    case 'FETCH_SINGLE_PLAYLIST_SUCCESS':
      return action.playlist;
    default:
      return state;
  }
}

export function playlistIsLoading(state = false, action) {
  switch(action.type) {
    case 'PLAYLIST_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}


function playlistsReducer(state = [], action) {
  switch(action.type) {
    //case 'LOADING_PLAYLISTS':
    //  return Object.assign({}, state);

    case 'FETCH_PLAYLISTS':
      return action.playlists;

    case 'CREATE_PLAYLIST_SUCCESS':
      return state.concat(action.playlist);

    case 'FETCH_PLAYLIST':
      return action.playlist;

    default:
      return state;
  }
}
export default playlistsReducer
*/
