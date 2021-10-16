import React, { useState, useEffect } from "react";

const ColoredDiv = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  let styles = {
    background: props.color,
    // add conditional logic here
    flex: width > 700 ? "1" : "0",
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      <div style={styles} className="colored-div">
        {props.color}
        <button>Remove</button>
      </div>
    </>
  );
};

export default ColoredDiv;
