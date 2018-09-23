import React from 'react';
import { hydrate } from 'react-dom';
import App from './App.jsx';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

hydrate(
  <Root />,
  document.getElementById('root')
);