const initialState = {
  attributes: {
    name: '',
    description: ''
  }
}

function playlistFormReducer(state = initialState, action) {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.playlistFormData;

    case 'RESET_PLAYLIST_FORM':
      return initialState;

    default:
      return state;
  }
}
export default playlistFormReducer
