// IMPORT useState
import React, { useState } from "react";
import BigImage from "./Components/BigImage";
import Thumbnails from "./Components/Thumbnails";
import "./styles.css";
import imagesArr from "./imageData";

const App = () => {
  const [bigImage, setBigImage] = useState(imagesArr[0]);

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <Thumbnails
          images={imagesArr}
          bigImage={bigImage}
          setBigImage={setBigImage}
        />
        <BigImage bigImage={bigImage} />
      </div>
    </div>
  );
};

export default App;
