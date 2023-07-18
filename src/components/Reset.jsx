import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter } from '../services/actions/Action';
import Styles from '../styles/reset.module.scss';
import Button from './Button';

function Reset() {
  const dispatch = useDispatch();
  return (
    <Button className={Styles.reset} text="RESET" onClick={() => dispatch(resetCounter())} />
  );
}

export default Reset;
