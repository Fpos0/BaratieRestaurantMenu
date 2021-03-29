/* eslint-disable react/no-unescaped-entities */
import { FoodsContext } from 'contexts/FoodsContext';
import React, { useContext } from 'react';
import styles from '../styles/components/FoodTypes.module.css';

export function FoodTypes() {
  const { setFoodCardsByCategory } = useContext(FoodsContext);

  // NAO ESTA SENDO UTILIZADO
  return (
    <div className={styles.container}>
      <button
        className={styles.firstName}
        type="button"
        value="meats"
        onClick={() => setFoodCardsByCategory('meats')}
      >
        Carnes
      </button>
      <button type="button">Saladas</button>
      <button type="button">Plates</button>
      <button type="button">Drinks</button>
      <button type="button">Sanji's Specials</button>
    </div>
  );
}
