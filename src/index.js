import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './reducers/reducer';

import { addJob, editJob } from './reducers/reducer';

// uncomment so that webpack can bundle styles

// import './scss/main.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
