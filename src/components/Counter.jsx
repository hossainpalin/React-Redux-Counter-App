import React from 'react';
import Styles from '../styles/counter.module.scss';
import Count from './Count';
import Decrement from './Decrement';
import Increment from './Increment';
import Reset from './Reset';

function Counter() {
  return (
    <div className={`${Styles.counter} flex flex-col-center`}>

      {/* App Title */}
      <div className={`${Styles.title} flex flex-col-center`}>
        <h1>React Redux</h1>
        <span>Counter App</span>
      </div>

      {/* Count status */}
      <Count />

      {/* Activitys buttons */}
      <div className={`${Styles.activitys} flex flex-row-center`}>
        <Increment />
        <Reset />
        <Decrement />
      </div>

      {/* App Line */}
      <div className={Styles.line} />
    </div>
  );
}

export default Counter;
