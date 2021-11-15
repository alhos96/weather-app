import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { CircularProgress, Button } from "@mui/material";
import weatherApi from "../axios";

function LocationWeather({ location, id, setCurrentLocations, currentLocations, i }) {
  console.log(location);
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
  }, [currentLocations]);

  return (
    <div style={{ textAlign: "center" }}>
      {weatherData ? (
        <WeatherDisplay
          weatherData={weatherData}
          id={id}
          setCurrentLocations={setCurrentLocations}
          currentLocations={currentLocations}
          i={i}
        />
      ) : (
        (
          <div className="error">
            {" "}
            <p>{errorMessage}</p>
            <Button
              id={id}
              variant="contained"
              color="primary"
              size="small"
              style={{ position: "absolute", right: "15px", bottom: "px", opacity: "0.5" }}
              onClick={(e) => {
                currentLocations.splice(i, 1);
                setCurrentLocations([...currentLocations]);
              }}
            >
              remove
            </Button>
          </div>
        ) || <CircularProgress sx={{ m: 2.8 }} />
      )}
    </div>
  );
}

export default LocationWeather;
