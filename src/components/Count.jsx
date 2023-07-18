import React from 'react';
import { useSelector } from 'react-redux';
import Styles from '../styles/count.module.scss';
import CircleProgressBar from './CircleProgressBar';

function Count() {
  const { count } = useSelector((state) => state);

  return (
    <div className={`${Styles.count} flex flex-row-center`}>
      <div className={`${Styles.status} flex flex-col-center`}>
        <h1>{count}</h1>
        <p>COUNTS</p>
      </div>
      <div className={`${Styles.progress} flex flex-row-center`}>
        <CircleProgressBar />
      </div>
    </div>
  );
}

export default Count;
