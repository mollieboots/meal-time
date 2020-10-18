import React from "react";
import { connect } from "react-redux";
import { makeApiCall } from "./../actions/index";
import SearchBar from "./SearchBar";
import { withFirestore, isLoaded } from "react-redux-firebase";
// import firebase from "firebase/app";

export class RecipeControl extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, recipes } = this.props;
    const auth = this.props.firebase.auth;
    console.log(auth);
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.isEmpty == true) {
      return (
        <React.Fragment>
          <SearchBar />
          <h1>Top Recipes</h1>
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id} id={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>Ready in {recipe.readyInMinutes} minutes</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
    if (isLoaded(auth) && auth.isEmpty != true) {
      return (
        <React.Fragment>
          <SearchBar />
          <h1>Top 10 Recipes for you, pardner</h1>
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id} id={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>Ready in {recipe.readyInMinutes} minutes</p>
              </li>
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase,
    recipes: state.recipesList.recipes,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(RecipeControl);
