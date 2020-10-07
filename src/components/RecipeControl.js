import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions/index';

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
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>recipes</h1>
          <ul>
            {recipes.map((recipe) =>
              <li key={recipe.id} id={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>Ready in {recipe.readyInMinutes} minutes</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(RecipeControl);
