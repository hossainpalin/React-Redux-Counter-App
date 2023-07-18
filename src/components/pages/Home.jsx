import React from 'react';
import Styles from '../../styles/home.module.scss';
import Counter from '../Counter';

function Home() {
  return (
    <div className={Styles.container}>
      <Counter />
    </div>
  );
}

export default Home;
