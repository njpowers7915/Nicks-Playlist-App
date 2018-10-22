import { combineReducers } from 'redux';
import playlistsReducer from './playlistsReducer';
import tracksReducer from './tracksReducer';
//import authReducer from './authReducer';

export default combineReducers({
  playlists: playlistsReducer,
  tracks: tracksReducer
})

/*
import { combineReducers } from 'redux';
import {playlistsReducer, playlistReducer, playlistsAreLoading, playlistIsLoading} from './playlistsReducer';
//import tracksReducer from './tracksReducer';
//import authReducer from './authReducer';

const rootReducer = combineReducers({
  playlistsReducer,
  playlistReducer,
  playlistsAreLoading,
  playlistIsLoading
})

export default rootReducer
*/
