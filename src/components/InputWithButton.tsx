import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"


type MealDataState = {
    idMeal: string
    strMeal: string
    strInstructions: string
    strMealThumb: string
    strYoutube: string
    strArea: string
    strCategory: string
}

const InputWithButton = () => {

    const [mealName, setMealName] = useState("")
    const [mealData, setMealData] = useState<MealDataState>({
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

        console.log(mealData)
    }


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMealName(e.target.value)
    }

    return (
        <div className="flex">
            <form
                className="flex space-x-2"
                onSubmit={(e) => getMealData(e)}>
                <Input
                    type="text"
                    placeholder="料理名を英語で検索"
                    onChange={(e) => handleInput(e)} />
                <Button
                    type="submit">検索</Button>
            </form>
        </div>
    )
}
export default InputWithButton
