import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/root'

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
))

export default store
/*
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {

    // const composeEnhancers =
    //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    //         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //             // options like actionSanitizer, stateSanitizer
    //         }) : compose;

    // const enhancer = composeEnhancers(
    //     applyMiddleware(thunk)
    // );

    const enhancer = applyMiddleware(thunk)

    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}
*/
