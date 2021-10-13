import React from "react";

const BigImage = ({ bigImage }) => {
  return <img id="bigimage" src={bigImage.img} alt={bigImage.city} />;
};

export default BigImage;
