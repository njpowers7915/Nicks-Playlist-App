export default (state = [], action) => {
  const newTrack = action.track;
  switch(action.type) {
    //case 'LOADING_PLAYLISTS':
    //  return Object.assign({}, state);

    case 'REMOVE':
      console.log('remove', action.id)
      return {
        state,
        playlist: state.playlist.filter((track) => track.id !== action.id)
      };

    case 'ADD':
      if (state.playlist.filter(track => action.track.id === track.id).length > 0) {
        return state
      }
      return {
        state,
        playlist: [
          state.playlist,
          {
            id: state.playlist.length,
            ...newTrack
          }
        ]
      }
      

    case 'GET_PLAYLISTS_SUCCESS':
      return action.playlists;

    case 'CREATE_PLAYLIST_SUCCESS':
      //const playlist = Object.assign({}, action.playlist, { id: state.length + 1 } )
      //return [ ...state, playlist];
      return state.concat(action.playlist);

    //case 'ADD_TRACK_SUCCESS':
    //  const playlist =

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
