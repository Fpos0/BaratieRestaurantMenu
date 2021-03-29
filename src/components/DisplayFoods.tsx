/* eslint-disable react/no-unused-prop-types */
import { FoodsContext } from 'contexts/FoodsContext';
import { useContext } from 'react';
import styles from '../styles/components/DisplayFoods.module.css';
import { FoodCard } from './FoodCard';
// import { FoodCard } from './FoodCard';
interface FoodCardData {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  category: string;
  id: string;
  quantity: number;
}
export function DisplayFoods() {
  const { foodsDisplay, setFoodCardsByCategory } = useContext(FoodsContext);
  function makeJSX({
    name,
    description,
    price,
    imgUrl,
    id,
    quantity,
  }: FoodCardData) {
    return (
      <FoodCard
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

  return (
    <div className={styles.container}>
      <div className={styles.containerFoodTypes}>
        <button
          className={styles.firstName}
          type="button"
          onClick={() => setFoodCardsByCategory('all')}
        >
          All
        </button>
        <button type="button" onClick={() => setFoodCardsByCategory('meats')}>
          Carnes
        </button>
        <button type="button" onClick={() => setFoodCardsByCategory('salads')}>
          Saladas
        </button>
        <button type="button" onClick={() => setFoodCardsByCategory('plates')}>
          Plates
        </button>
        <button type="button" onClick={() => setFoodCardsByCategory('drinks')}>
          Drinks
        </button>
        <button
          type="button"
          onClick={() => setFoodCardsByCategory('specials')}
        >
          Specials
        </button>
      </div>

      {
        foodsDisplay.map(foodInfo => {
          return makeJSX(foodInfo);
        })
        // teria q pegar essa variavel do contexto,fazer toda logica de selecionar oq aparece no contexto e mandar direto p ca
      }
    </div>
  );
}
