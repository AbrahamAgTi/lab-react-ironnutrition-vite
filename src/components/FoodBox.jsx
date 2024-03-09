function FoodBox({ food, deleteFood }) {
  
  
  return (
    <div>
 
        <div key={food.id}>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.servings * food.calories} kcal</b>
          </p>
          <button onClick ={()=>deleteFood(food.id)} >Delete</button>
        </div>

    </div>
  );
}

export default FoodBox;
