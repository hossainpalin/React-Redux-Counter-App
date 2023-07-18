import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../services/actions/Action';
import Styles from '../styles/increment.module.scss';
import Button from './Button';

function Increment() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <Button className={Styles.increment} text="+" onClick={() => dispatch(incrementCounter())} disabled={count === 100} />
  );
}

export default Increment;
