import React from 'react';
import Styles from '../styles/decrement.module.scss';
import Button from './Button';

function Decrement() {
  return (
    <Button className={Styles.decrement} text="-" />
  );
}

export default Decrement;
