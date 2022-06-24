import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <>
      {allFoods.map((food) => {
        return (
          <>
            <FoodBox food={food} />
          </>
        );
      })}

      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
    </>
  );
}

export default App;
