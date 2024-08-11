const RecipeDetailsItem = ({ recipeDetails }) => {
  return (
    <div>
      <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto'>
        <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='w-full lg:sticky top-0 sm:flex gap-2'>
            <img
              src={recipeDetails?.image}
              alt={recipeDetails?.name}
              className='rounded object-cover w-4/5'
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
                {recipeDetails?.name}
            </h2>
            <div className="gap-4 mt-3">
                <p className="text-2xl text-gray-700">
                    {recipeDetails?.mealType[0]}
                </p>
            </div>
            <div className="mt-3">
                <p className="text-xl text-gray-800">
                    {recipeDetails?.cuisine}
                </p>
            </div>
            <div className="mt-3">
                <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
                <ul className="space-y-1 list-disc mt-3 pl-4 text-sm text-gray-700">
                    {recipeDetails?.ingredients.map((item)=>(
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-3">
                <h3 className="text-lg font-bold text-gray-700">Instructions</h3>
                <ul className="space-y-1 list-disc mt-3 pl-3 text-sm text-gray-700">
                    {recipeDetails?.instructions.map((method)=>(
                      <li>{method}</li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsItem;
