/* eslint-disable react/no-unused-prop-types */
import { FoodsContext } from 'contexts/FoodsContext';
import { useContext } from 'react';
// import styles from '../styles/components/CheckCardsContainer.module.css';
import { CheckCard } from './CheckCard';
// import { CheckCard } from './CheckCard';
interface CheckCardData {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  category: string;
  id: string;
  quantity: number;
}
export function CheckCardsContainer() {
  const { foodsDisplay, setFoodCardsByCategory } = useContext(FoodsContext);
  function makeJSX({
    name,
    description,
    price,
    imgUrl,
    id,
    quantity,
  }: CheckCardData) {
    return (
      <CheckCard
        description={description}
        imgUrl={imgUrl}
        name={name}
        price={price}
        id={id}
        quantity={quantity}
      />
    );
  }
  // const [foodsJSX, setfoodsJSX] = useState<JSX.Element[]>(
  //   foodsDisplay.map(foodInfo => {
  //     return makeJSX(foodInfo);
  //   }),
  // );
  // setFoodCardsByQuantity();
  setFoodCardsByCategory('all');
  const filteredFoods = foodsDisplay.filter(food => {
    return food.quantity > 0;
  });
  return (
    <div>
      {filteredFoods.map(foodInfo => {
        return makeJSX(foodInfo);
      })}
    </div>
  );
}
