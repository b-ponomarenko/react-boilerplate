import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(
  document.getElementById('root'),
  <App />
);