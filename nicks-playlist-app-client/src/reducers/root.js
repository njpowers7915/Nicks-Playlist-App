import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';
import tracksReducer from './tracksReducer';
//import authReducer from './authReducer';

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer
})

export default rootReducer;
