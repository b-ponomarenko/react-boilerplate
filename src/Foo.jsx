import React from 'react';
import styles from './Foo.css';
import axios from 'axios';
import { connect } from 'react-redux';

const Foo = ({ data }) => (
  <div className={styles.foo}>
    <div className={styles.bar33}>
      {data.map(({ title }) => <span key={title}>{title}</span>)}
    </div>
  </div>
);

Foo.propTypes = {};

Foo.actions = [
  () =>
      dispatch =>
        axios.get('http://jsonplaceholder.typicode.com/db')
          .then(({ data }) => dispatch({
            type: 'SERVER_DATA_LOADED',
            payload: data.posts
          }))
];

export default connect(state => ({ data: state.data }))(Foo);
