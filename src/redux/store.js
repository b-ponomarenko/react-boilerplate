import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(
  thunk
);

export default createStore(
  reducer,
  process.env.BROWSER ? window.__INITIAL_DATA__ : {},
  compose(
    ...(process.env.BROWSER ? [
      middlewares,
      window.__REDUX_DEVTOOLS_EXTENSION__()
    ] : [middlewares])
  )
);

if (process.env.BROWSER) {
  delete window.__INITIAL_DATA__;
}