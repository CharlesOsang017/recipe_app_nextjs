import RecipeList from "@/components/recipeList"

const getListOfRecipes = async ()=>{
  try {
    const apiResponse = await fetch('https://dummyjson.com/recipes')
    const result = await apiResponse.json()
    return result?.recipes
  } catch (error) {
    throw new error(error)
  }
}

const Recipes = async () => {
  const listOfRecipes = await getListOfRecipes()
  return (
    <RecipeList listOfRecipes={listOfRecipes}/>
  )
}

export default Recipes