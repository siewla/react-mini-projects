import React from "react";
import "./styles.css";
import { weatherData } from "./weatherData";
import WeatherIcons from "./Components/WeatherIcons";

const App = () => {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {weatherData.map((weather, idx) => {
          return (
            <WeatherIcons
              key={idx}
              imgUrl={weather.imgUrl}
              condition={weather.condition}
              time={weather.time}
            />
          );
        })}
      </section>
    </div>
  );
};

export default App;
