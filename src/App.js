import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";

function App() {
  const [{}, dispatch] = useStateValue(); // eslint-disable-line no-empty-pattern

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        // the user just loggedin / the user was loggedin
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    // BEM convetion
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
