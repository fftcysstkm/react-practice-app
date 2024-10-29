import { useEffect, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Recipe from "./components/Recipe"
import { MealData } from "./types/mealData"

const App = () => {

  const [mealName, setMealName] = useState<string>("")
  const [mealData, setMealData] = useState<MealData>({
    idMeal: "",
    strMeal: "",
    strInstructions: "",
    strMealThumb: "",
    strYoutube: "",
    strArea: "",
    strCategory: ""
  })

  const getMealData = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    console.log(mealName)
    console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    const jsonData = await response.json()
    const { idMeal, strMeal, strInstructions, strMealThumb, strYoutube, strArea, strCategory } = jsonData.meals[0]

    setMealData({
      idMeal,
      strMeal,
      strInstructions,
      strMealThumb,
      strYoutube,
      strArea,
      strCategory
    })
  }

  return (
    <>
      <div>
        <Header />
        <Form
          setMealName={setMealName}
          getMealData={getMealData} />
        <Recipe
          mealData={mealData} />
      </div>
    </>
  )
}

export default App
