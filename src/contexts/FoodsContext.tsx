/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
import { createContext, ReactNode, useEffect, useState } from 'react';
import data from '../assets/foods.json';
// import { FoodCard } from '../components/FoodCard';

interface FoodCardData {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  category: string;
  id: string;
}
interface FoodCardData2 {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  category: string;
  quantity: number;
  id: string;
}
// type FullMenu = Array<FoodCardData>;
interface FoodsProviderProps {
  children: ReactNode;
}

interface FoodsContextData {
  setFoodCardsByCategory: (filter: string) => void;
  setFoodCardsByInput: (filter: string) => void;
  setFoodCardsByQuantity: () => void;
  increaseQuantity: (filter: string) => void;
  decreaseQuantity: (filter: string) => void;
  getTotalPrice: () => void;

  foodsDisplay: FoodCardData2[];
}
export const FoodsContext = createContext({} as FoodsContextData);

export function FoodsProvider({ children }: FoodsProviderProps) {
  const FoodsInfo = data.map((food: FoodCardData) => ({
    ...food,
    quantity: 0,
  }));
  const [foodsTotal, setFoodsTotal] = useState(0);
  const [foods, setFoods] = useState(FoodsInfo);
  const [foodsDisplay, setfoodsDisplay] = useState(FoodsInfo);

  function setFoodCardsByInput(filter: string) {
    const filterByName = foods.filter(food =>
      food.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setfoodsDisplay(filterByName);
  }

  // Pegar todos que possuem quantity > 0 e poem no displayfoods
  function setFoodCardsByQuantity() {
    const filterByQuantity = foods.filter(food => {
      return food.quantity > 0;
    });

    setfoodsDisplay(filterByQuantity);
  }

  function setFoodCardsByCategory(filter: string) {
    if (filter !== 'all') {
      const filterByTag = foods.filter(food => {
        return food.category === filter;
      });
      setfoodsDisplay(filterByTag);
    } else {
      setfoodsDisplay(foods);
    }
  }

  useEffect(() => {
    console.log(`valor de foods total ${foodsTotal}`);
  }, [foodsTotal]);

  function getTotalPrice() {
    return foodsTotal.toFixed(2);
  }
  function increaseQuantity(idToAdd: string) {
    // Atualiza o state foods,dps chama uma funcao p renderizar o foodsJSX

    const tempTotal = foodsTotal;

    const tempFoods = foods;
    const foodIndex = foods.findIndex(food => food.id === idToAdd);
    tempFoods[foodIndex].quantity += 1;

    setFoodsTotal(tempTotal + parseFloat(tempFoods[foodIndex].price));
    console.log(parseFloat(tempFoods[foodIndex].price));

    setFoods([...tempFoods]);
    // setFoodCardsByCategory('all');
  }
  function decreaseQuantity(idToSubtract: string) {
    // Atualiza o state foods,dps chama uma funcao p renderizar o foodsJSX
    const tempFoods = foods;

    const tempTotal = foodsTotal;

    const foodIndex = foods.findIndex(food => food.id === idToSubtract);
    if (tempFoods[foodIndex].quantity > 0) {
      tempFoods[foodIndex].quantity -= 1;

      setFoodsTotal(tempTotal - parseFloat(tempFoods[foodIndex].price));

      setFoods([...tempFoods]);
    }

    // setFoodCardsByCategory('all');
  }
  return (
    <FoodsContext.Provider
      value={{
        foodsDisplay,
        setFoodCardsByCategory,
        setFoodCardsByInput,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
        setFoodCardsByQuantity,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
}
