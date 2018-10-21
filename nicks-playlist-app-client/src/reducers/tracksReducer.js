function tracksReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TRACKS':
      return action.playlists;

    default:
       return state;
  }
}

export default tracksReducer
