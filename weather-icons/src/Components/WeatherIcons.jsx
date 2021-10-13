import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherIcons = ({ imgUrl, condition, time }) => {
  return (
    <div className="weather">
      <WeatherIcon imgUrl={imgUrl} />
      <WeatherData condition={condition} time={time} />
    </div>
  );
};

export default WeatherIcons;
