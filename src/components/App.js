import React from 'react';
import Header from './Header';
import RecipeControl from './RecipeControl';
import SignIn from "./SignIn";
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <RecipeControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
