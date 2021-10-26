import React from "react";
import ButtonComponentByClassName from "./Components/ButtonComponentByClassName";
import ButtonComponentByReactComponent from "./Components/ButtonComponentByReactComponent";
import ButtonComponentMUI from "./Components/ButtonComponentMUI";

const App = () => {
  return (
    <div className="App">
      <ButtonComponentMUI />
      <h1>MDBReact</h1>
      <hr />
      <ButtonComponentByClassName />
      <hr />
      <ButtonComponentByReactComponent />
    </div>
  );
};

export default App;
