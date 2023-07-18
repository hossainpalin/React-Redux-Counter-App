import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter } from '../services/actions/Action';
import Styles from '../styles/decrement.module.scss';
import Button from './Button';

function Decrement() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Button className={Styles.decrement} text="-" onClick={() => dispatch(decrementCounter())} disabled={count === 0} />
  );
}

export default Decrement;
