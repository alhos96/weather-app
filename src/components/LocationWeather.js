import React, { useState, useEffect } from "react";
import { WeatherDisplay } from "./index";
import CircularProgress from "@mui/material/CircularProgress";
import Error from "./Error";
import weatherApi from "../axios";

function LocationWeather(props) {
  const [weatherData, setWeatherData] = useState("");
  const [errorRetrievingData, setErrorRetrievingData] = useState("");

  const [niz, setNiz] = useState([]);

  useEffect(() => {
    async function getWeather() {
      await weatherApi
        .get(`?q=${props.location}&appid=a7fb999cbba1e12e803d78254dbd4924&units=metric`)
        .then((res) => {
          setWeatherData(res.data);

          setNiz((niz) => [...niz, res.data]);
        })
        .catch((err) => {
          if (err.response.status === 404) setErrorRetrievingData("Location not found");
        });
    }
    getWeather();
  }, [props.location]);

  console.log(niz);
  return (
    <div style={{ textAlign: "center" }}>
      {weatherData ? (
        <WeatherDisplay weatherData={weatherData} cvl={props.cvl} idfd={props.idfd} scvl={props.scvl} />
      ) : (
        <Error err={errorRetrievingData}></Error> || <CircularProgress sx={{ m: 2.8 }} />
      )}
    </div>
  );
}

export default LocationWeather;