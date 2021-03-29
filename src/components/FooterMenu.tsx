import React from 'react';
import { IoHomeOutline, IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from '../styles/components/FooterMenu.module.css';

export function FooterMenu() {
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <div>
            <button type="button" className={styles.btnStyle}>
              <IoHomeOutline size={25} />
              <span>Início</span>
            </button>
          </div>
        </Link>

        <Link to="/check">
          <div>
            <button type="button" className={styles.btnStyle}>
              <IoBagHandleOutline size={25} />
              <span>Sacola</span>
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}
