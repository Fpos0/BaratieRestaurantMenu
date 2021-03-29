import { FoodsContext } from 'contexts/FoodsContext';
import React, { useContext } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import styles from '../styles/components/CheckCard.module.css';

interface CheckCardProps {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  id: string;
  quantity: number;
}
// {name,description,price,imgUrl}:CheckCardProps
// const { setCheckCardsByCategory } = useContext(FoodsContext);

export function CheckCard({
  name,
  description,
  price,
  imgUrl,
  id,
  quantity,
}: CheckCardProps) {
  const { increaseQuantity, decreaseQuantity } = useContext(FoodsContext);
  function handleDecrease() {
    decreaseQuantity(id);
  }
  function handleIncrease() {
    increaseQuantity(id);
  }
  const formatedPrice = quantity * parseFloat(price);
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

        <div className={styles.TotalDisplay}>
          <span>{formatedPrice.toFixed(2)}</span>
        </div>
      </div>

      <hr className={styles.divider} />
    </>
  );
}
