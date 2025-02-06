import axios from "axios";
import { ADD_FAVORITE, FAILURE_RECIPES, REMOVE_FAVORITE, REQUEST_RECIPES, SUCCESS_RECIPES } from "./actionType";

const API_URL = `https://api.edamam.com/search?q=pizza&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`;

  export const fetchRecipes = (query = "pizza") => (dispatch) => {
    dispatch({ type: REQUEST_RECIPES });

    axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`
      )
      .then((res) => {
        dispatch({ type: SUCCESS_RECIPES, payload: res.data.hits });
      })
      .catch(() => {
        dispatch({ type: FAILURE_RECIPES });
      });
  };

// export const fetchRecipes = (query = "pizza", category = "", diet = "", page = 0) => async (dispatch) => {
//   dispatch({ type: "REQUEST_RECIPES" });

//   try {
//     const pageSize = 10; // Number of recipes per page
//     let url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${page * pageSize}&to=${(page + 1) * pageSize}`;

//     if (category) url += `&mealType=${category}`;
//     if (diet) url += `&diet=${diet}`;

//     const { data } = await axios.get(url);
//     console.log(data);
    
//     dispatch({ type: "SUCCESS_RECIPES", payload: data.hits.map(hit => hit.recipe) });
//   } catch (error) {
//     dispatch({ type: "ERROR_RECIPES" });
//   }
// };


export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE,
  payload: recipeId,
});








