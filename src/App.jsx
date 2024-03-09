import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {

  const [availableFoods, setFoods] = useState(foodsJson);

  const deleteFood = foodId => {
    const filteredFoods = availableFoods.filter(food => {
      return food.id !== foodId;
    })

    setFoods(filteredFoods)
  } 

  const addNewFood = newFood => {
    const foodsCopy = [...availableFoods]
    foodsCopy.unshift(newFood)
    setFoods(foodsCopy)
}
 
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      
      {availableFoods.map(food=> <FoodBox key={food.id} food={food} deleteFood={deleteFood} /> )}
      
    </div>
  );
}

export default App;
