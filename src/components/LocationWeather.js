import React, { useState, useEffect } from "react";
import { WeatherDisplay } from "./index";
import CircularProgress from "@mui/material/CircularProgress";
import weatherApi from "../axios";

function LocationWeather({ location, id, setCurrentLocations, currentLocations }) {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getWeather() {
      await weatherApi
        .get(`?q=${location}&appid=a7fb999cbba1e12e803d78254dbd4924&units=metric`)
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((err) => {
          setErrorMessage("city not found");
        });
    }
    getWeather();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      {weatherData ? (
        <WeatherDisplay weatherData={weatherData} id={id} setCurrentLocations={setCurrentLocations} currentLocations={currentLocations} />
      ) : (
        <p>{errorMessage}</p> || <CircularProgress sx={{ m: 2.8 }} />
      )}
    </div>
  );
}

export default LocationWeather;
