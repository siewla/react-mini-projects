import React from "react";

const WeatherData = ({ condition, time }) => {
  return (
    <>
      <p>
        <span>conditions:</span> {condition}
      </p>
      <p>
        <span>time:</span> {time}
      </p>
    </>
  );
};

export default WeatherData;
