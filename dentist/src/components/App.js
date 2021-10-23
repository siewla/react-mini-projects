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
        <Link to={BASE_URL}>Go to Home Page</Link>
        <Link to={BASE_URL + "procedures"}>See Our Procedures</Link>
        <Link to={BASE_URL + "contact"}>Contact Us!</Link>
        <Link to={BASE_URL + "dummy"}>Dummy Link</Link>
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
          <Redirect to={BASE_URL} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
