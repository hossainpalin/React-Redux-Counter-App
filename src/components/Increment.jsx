import React from 'react';
import Styles from '../styles/increment.module.scss';
import Button from './Button';

function Increment() {
  return (
    <Button className={Styles.increment} text="+" />
  );
}

export default Increment;
