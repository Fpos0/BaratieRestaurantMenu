import { FoodsContext } from 'contexts/FoodsContext';
import React, { useContext } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import styles from '../styles/components/FoodCard.module.css';

interface FoodCardProps {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  id: string;
  quantity: number;
}
// {name,description,price,imgUrl}:FoodCardProps
// const { setFoodCardsByCategory } = useContext(FoodsContext);

export function FoodCard({
  name,
  description,
  price,
  imgUrl,
  id,
  quantity,
}: FoodCardProps) {
  const { increaseQuantity, decreaseQuantity } = useContext(FoodsContext);
  function handleDecrease() {
    decreaseQuantity(id);
  }
  function handleIncrease() {
    increaseQuantity(id);
  }
  return (
    <>
      <div className={styles.CardContainer}>
        <img src={imgUrl} alt="Img Food" />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>R$ {price}</p>
        </div>

        <div className={styles.PurchaseOptions}>
          <button type="button" onClick={handleDecrease}>
            <IoRemoveCircleOutline size={29} />
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={handleIncrease}>
            <IoAddCircleOutline size={29} />
          </button>
        </div>
      </div>

      <hr className={styles.divider} />
    </>
  );
}
