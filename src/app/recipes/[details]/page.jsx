import RecipeDetailsItem from "@/components/recipe-details";

const getRecipeDetails = async(currentRecipeId)=>{
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
        const data = await apiResponse.json()
        return data;
    } catch (error) {
        throw new Error(error)
    }

}
const DetailsPage = async({params}) => {
    const recipeDetails = await getRecipeDetails(params?.details)
    // console.log(recipeDetails);
    
  return (
    <RecipeDetailsItem recipeDetails={recipeDetails} />
  )
}

export default DetailsPage