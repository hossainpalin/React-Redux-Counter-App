import React from 'react';
import Styles from '../styles/count.module.scss';
import CircleProgressBar from './CircleProgressBar';

function Count() {
  return (
    <div className={`${Styles.count} flex flex-row-center`}>
      <div className={`${Styles.status} flex flex-col-center`}>
        <h1>7210</h1>
        <p>STEPS</p>
      </div>
      <div className={`${Styles.progress} flex flex-row-center`}>
        <CircleProgressBar />
      </div>
    </div>
  );
}

export default Count;
