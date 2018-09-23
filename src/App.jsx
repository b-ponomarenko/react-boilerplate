import React from 'react';
import { Route } from 'react-router-dom';
import Foo from './Foo.jsx';
import { hot } from 'react-hot-loader';

const App = props => (
  <div>
    <Route path='/' component={Foo}/>
  </div>
);

App.propTypes = {};

export default hot(module)(App);
