import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/action";
import RecipeCard from "../components/RecipeCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { recipes, isLoading, isError } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      toast.info("Recipes are loading... Please wait!", {
        autoClose: false,
        toastId: "loading",
      });
    } else {
      toast.dismiss("loading");
    }
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      toast.error("Failed to fetch recipes. Please try again later.");
    }
  }, [isError]);

  return (
    <div className="p-4">
           <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {isLoading && <p className="text-center text-gray-600">Loading recipes...</p>}
      {isError && <p className="text-center text-red-500">Error fetching recipes.</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};