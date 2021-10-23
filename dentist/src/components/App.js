import React from "react";
import Home from "./Home";
import Procedures from "./Procedures";
import Contact from "./Contact";
import { Route, Link, Switch, Redirect } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const App = () => {
  // console.log(BASE_URL);
  return (
    <div>
      <nav>
        <Link to="/">Go to Home Page</Link>
        <Link to="/procedures">See Our Procedures</Link>
        <Link to="/contact">Contact Us!</Link>
        <Link to="/dummy">Dummy Link</Link>
      </nav>
      <div>
        <Switch>
          <Route exact={true} path={BASE_URL}>
            <Home />
          </Route>
          <Route exact={true} path={BASE_URL + "procedures"}>
            <Procedures />
          </Route>
          <Route exact={true} path={BASE_URL + "contact"}>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
