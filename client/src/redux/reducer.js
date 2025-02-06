import { ADD_FAVORITE, FAILURE_RECIPES, REMOVE_FAVORITE, REQUEST_RECIPES, SET_FILTERS, SUCCESS_RECIPES } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  recipes: [],
  favorites: [],
  filters: {
    query: "",
    category: "",
    diet: "",
  },
};
  export const recipesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case REQUEST_RECIPES:
        return { ...state, isLoading: true, isError: false };
  
      case SUCCESS_RECIPES:
        return { ...state, isLoading: false, recipes: payload };
  
      case FAILURE_RECIPES:
        return { ...state, isLoading: false, isError: true };
        case ADD_FAVORITE:
          return { ...state, favorites: [...state.favorites, payload] };
    
        case REMOVE_FAVORITE:
          return {
            ...state,
            favorites: state.favorites.filter((fav) => fav.recipe.uri !== payload),
          };
          case SET_FILTERS:
            return { ...state, filters: { ...state.filters, ...payload } };
  
      default:
        return state;
    }
  };
  

  