import React from "react";
import Thumb from "./Thumb";

const Thumbnails = ({ images, bigImage, setBigImage }) => {
  return (
    <div id="thumbnails">
      {images.map((image, idx) => {
        return (
          <Thumb
            key={idx}
            image={image}
            setBigImage={setBigImage}
            bigImage={bigImage}
          />
        );
      })}
    </div>
  );
};

export default Thumbnails;
