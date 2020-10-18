import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import recipesReducer from './recipes-reducer';

const rootReducer = combineReducers({
    recipesList: recipesReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;