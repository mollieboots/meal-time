import * as c from './ActionTypes';

export const requestRecipes = () => ({
  type: c.REQUEST_RECIPES
});

export const getRecipesSuccess = (recipes) => ({
  type: c.GET_RECIPES_SUCCESS,
  recipes
});

export const getRecipesFailure = (error) => ({
  type: c.GET_RECIPES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRecipes);
    return fetch(`https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRecipesSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getRecipesFailure(error));
      });
  }
}