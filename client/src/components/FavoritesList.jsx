import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

export const FavoritesList = () => {
  const { favorites } = useSelector((state) => state.recipes);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p>No favorite recipes added.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}

