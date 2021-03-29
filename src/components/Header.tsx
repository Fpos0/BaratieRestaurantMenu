import React from 'react';
import styles from '../styles/components/Header.module.css';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Header() {
  return (
    <header className={styles.Headercontainer}>
      <img src="/logoBlack.PNG" alt="Baratie logo" />
      <div>
        <h2>Baratie Restaurant</h2>
        <p>11:45 ~~ 24:00</p>
        <p>The best food from East Blue !!</p>
      </div>
    </header>
  );
}
