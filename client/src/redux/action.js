import axios from "axios";
import {
  ADD_FAVORITE,
  FAILURE_RECIPES,
  REMOVE_FAVORITE,
  REQUEST_RECIPES,
  SUCCESS_RECIPES,
} from "./actionType";

export const fetchRecipes =
  (query = "pizza") =>
  (dispatch) => {
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

export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE,
  payload: recipeId,
});
