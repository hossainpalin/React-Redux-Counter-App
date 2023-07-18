import React from 'react';
import Styles from '../styles/reset.module.scss';
import Button from './Button';

function Reset() {
  return (
    <Button className={Styles.reset} text="RESET" />
  );
}

export default Reset;
