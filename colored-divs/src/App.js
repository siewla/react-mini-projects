import React, { useEffect, useState } from "react";
import ColoredDiv from "./ColoredDiv";

function App() {
  const [colors, setColors] = useState(["lightgreen", "pink", "lightblue"]);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    // console.log("running update width");
    setWidth(window.innerWidth);
  };

  const colorsArr = colors.map((d, i) => {
    return <ColoredDiv color={d} key={i} index={i} />;
  });

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="App">
      <h1>Current Window Width: {width}</h1>
      <div className="colored-divs">{colorsArr}</div>
      <button>Add New Color</button>
    </div>
  );
}

export default App;
