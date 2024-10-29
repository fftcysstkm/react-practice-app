type RecipeProps = {
    mealData: {
        idMeal: string
        strMeal: string
        strInstructions: string
        strYoutube: string
        strArea: string
        strCategory: string
    }
}

const Recipe = (props: RecipeProps) => {
    console.log(props)
    return (
        <div>レシピコンポーネント</div>
    )
}

export default Recipe

