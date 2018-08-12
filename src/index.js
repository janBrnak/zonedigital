import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './store/reducers/rootReducer';
import fetchMoviesNowPlayingAction from './store/actions/fetchMoviesNowPlayingAction';
import fetchMovieGenreListAction from './store/actions/fetchMovieGenreListAction';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// create application store
const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

store.dispatch(fetchMoviesNowPlayingAction()); // fetch movies
store.dispatch(fetchMovieGenreListAction()); // fetch geners

// Render main DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
