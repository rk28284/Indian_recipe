import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/action";
import RecipeCard from "../components/RecipeCard";

export const Dashboard = () => {
 const dispatch = useDispatch();
// console.log("recipes", recipes);
  
 const { recipes, isLoading, isError } = useSelector((state) => state.recipes);

const data=useSelector((state)=>state)
console.log(data);

useEffect(()=>{
dispatch(fetchRecipes())
},[])

  return (
    <div className="p-2">

      {isLoading && <p>Loading...</p>}
      {isError && <p className="text-red-500">Error fetching recipes.</p>} 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
           <RecipeCard key={index} recipe={recipe} />
        ))}
      </div> 
    
    </div> 
     )
}


