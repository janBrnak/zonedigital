import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import fetchMoviesNowPlaying from './store/actions/fetchMoviesNowPlayingAction';
import fetchMovieGenreList from './store/actions/fetchMovieGenreListAction';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

store.dispatch(fetchMoviesNowPlaying()); // fetch movies
store.dispatch(fetchMovieGenreList()); // fetch geners

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
