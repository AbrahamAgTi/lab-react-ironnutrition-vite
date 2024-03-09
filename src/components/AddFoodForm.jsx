import { useState } from "react"

function AddFoodForm({ addNewFood }) {

    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleNameChange = event => setName(event.target.value)
    const handleImageChange = event => setImage(event.target.value)
    const handleCaloriesChange = event => setCalories(event.target.value)
    const handleServingsChange = event => setServings(event.target.value)

    const handleFromSubmit = event => {
        event.preventDefault()
        const newFood = {
            name:name,
            image: image,
            calories: calories,
            servings: servings,
        }

        addNewFood(newFood)
    }



  return (
    <div>
        <form onSubmit={handleFromSubmit}>
        <label>Name
            <input name="name" type ="text" value ={name} onChange={handleNameChange}></input>
        </label>
        <label>Image
            <input name="image" type ="text" value ={image} onChange={handleImageChange}></input>
        </label>
        <label>Calories
            <input name="calories" type ="number" value ={calories} onChange={handleCaloriesChange}></input>
        </label>
        <label>Servings
            <input name="servings" type ="number"value ={servings} onChange={handleServingsChange}></input>
        </label>
            <button type="submit" value ="Create">Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm