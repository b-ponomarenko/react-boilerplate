import React from 'react';
import styles from './Foo.css';

console.log(styles);

const Foo = props => (
    <div className={styles.foo}>meow</div>
);

Foo.propTypes = {};

export default Foo;
