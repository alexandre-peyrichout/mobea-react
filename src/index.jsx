import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import globalReducer from './reducers/index';

// Après avoir combiner les petits reducers, on peut enfin créer le store global (intégralité du state)
const store = createStore(
  globalReducer,
  // eslint-disable-next-line no-underscore-dangle, no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // le provider permet à tous les composants inclus dans le composant App, meme les petis petis petis petis enfants d'avoir accès au store global!
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
