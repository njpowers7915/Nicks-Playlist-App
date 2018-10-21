import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/root'
/*
const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer,  preloadedState,  composeEnhancers(
  applyMiddleware(thunk),
))

export default store
*/

export function configureStore(){
  return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = configureStore()
export default store
