import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';


const store = configureStore();

/* eslint-disable */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
/* eslint-enable */

registerServiceWorker();
