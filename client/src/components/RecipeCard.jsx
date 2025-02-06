import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/action";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.recipes);
  const isFavorite = favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri);
  const [showDetails, setShowDetails] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.recipe.uri));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <img
        src={recipe.recipe.image}
        alt={recipe.recipe.label}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{recipe.recipe.label}</h2>


      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Nutritional Information:</h3>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">Calories: {recipe.recipe.calories.toFixed(0)}</li>
          <li className="text-gray-600">Fat: {recipe.recipe.totalFat}g</li>
          <li className="text-gray-600">Protein: {recipe.recipe.protein}g</li>
          <li className="text-gray-600">Carbohydrates: {recipe.recipe.carbs}g</li>
        </ul>
      </div>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-blue-500 font-semibold hover:text-blue-600 mb-4 text-left"
      >
        {showDetails ? "Hide Details" : "More Details"}
      </button>

      {showDetails && (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {recipe.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h3>
            <p className="text-gray-600">{recipe.recipe.instructions || "No instructions available."}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nutritional Information:</h3>
            <ul className="list-disc list-inside">
              <li className="text-gray-600">Calories: {recipe.recipe.calories.toFixed(0)}</li>
              <li className="text-gray-600">Fat: {recipe.recipe.totalFat}g</li>
              <li className="text-gray-600">Protein: {recipe.recipe.protein}g</li>
              <li className="text-gray-600">Carbohydrates: {recipe.recipe.carbs}g</li>
            </ul>
          </div>
        </div>
      )}

      <button
        onClick={handleFavoriteClick}
        className={`mt-auto px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${isFavorite
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
      >
        {isFavorite ? "Remove from Favorites ❤️" : "Add to Favorites ❤️"}
      </button>
    </div>
  );
};

export default RecipeCard;