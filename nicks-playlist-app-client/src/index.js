import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { BrowserRouter as Router } from 'react-router-dom'

import store from './store'
import App from './containers/App';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,

  document.getElementById('root')
);

registerServiceWorker();
