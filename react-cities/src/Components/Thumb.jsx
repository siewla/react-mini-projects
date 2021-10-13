import React, { useState, useEffect } from "react";

const Thumb = ({ image, bigImage, setBigImage }) => {
  const [isSelected, setIsSelected] = useState(null);

  const checkSelected = () => {
    return image.img === bigImage.img
      ? setIsSelected(true)
      : setIsSelected(false);
  };

  useEffect(() => {
    checkSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bigImage]);

  return (
    <img
      className="thumb"
      src={image.img}
      alt={image.city}
      style={{ border: isSelected ? "4px solid green" : "none" }}
      onClick={() => {
        setIsSelected(true);
        setBigImage(image);
      }}
    />
  );
};

export default Thumb;
