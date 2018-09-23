import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';

export default createStore(
  reducer,
  compose(
    ...(process.env.BROWSER ? [
      applyMiddleware(),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    ] : [applyMiddleware()])
  )
);