import { FoodsContext } from 'contexts/FoodsContext';
import React, { ChangeEvent, useContext, useState } from 'react';
import styles from '../styles/components/SearchInput.module.css';

export function SearchInput() {
  // const { foodsJSX, setFoodCardsByCategory } = useContext(FoodsContext);
  const { setFoodCardsByInput, setFoodCardsByCategory } = useContext(
    FoodsContext,
  );
  const [text, setText] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);

    if (text !== '') {
      setFoodCardsByInput(text);
    } else {
      setFoodCardsByCategory('all');
    }
  }

  return (
    <div className={styles.container}>
      <label className="searchLabel" htmlFor="search-input">
        <input
          type="text"
          value={text}
          placeholder="Busque seu produto"
          onChange={handleChange}
        />
        {/* <i className="fa fa-search" /> */}
      </label>
    </div>
  );
}
