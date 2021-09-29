import React, { useState, useEffect } from "react";
import { WeatherDisplay } from "./index";

import weatherApi from "../axios";

function LocationWeather(props) {
  const [weatherData, setWeatherData] = useState("");
  const [errorRetrievingData, setErrorRetrievingData] = useState("");

  useEffect(() => {
    /* async function getWeather() {
      const res = await weatherApi.get("?q=sarajevo&appid=a7fb999cbba1e12e803d78254dbd4924");
      console.log(res);
    }
    getWeather(); */
    setWeatherData("this is weather display");
  }, [props.location]);

  return (
    <div>
      <WeatherDisplay weatherData={weatherData}></WeatherDisplay>
    </div>
  );
}

export default LocationWeather;
