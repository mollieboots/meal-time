import React from "react";
import firebase from "firebase/app";
import { Link, Redirect } from "react-router-dom";

function SignIn() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("successfully signed up!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <Link to="/">
        <button type="submit">Sign up</button>
        </Link>
      </form>
      <hr />
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <Link to="/">
          <button type="submit">Sign in</button>
        </Link>
      </form>
      <hr/>
      <h1>Sign Out</h1>
      <Link to="/">
        <button onClick={doSignOut}>Sign out</button>
      </Link>
    </React.Fragment>
  );
}

export default SignIn;
