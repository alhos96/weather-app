import React from "react";
import { Typography, Box, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function WeatherDisplay(props) {
  console.log(props.cvl);

  return (
    <div className="weather-display">
      <div className="weather">
        <Box>
          <img
            alt={props.weatherData.weather[0].description}
            title={props.weatherData.weather[0].description}
            src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`}
          ></img>
        </Box>
        <Box textAlign="center" alignItems="center">
          <Typography variant="h3">{Math.round(props.weatherData.main.temp)}</Typography>
          <hr></hr>
          <Typography variant="p">{`${props.weatherData.wind.speed}kp/h`}</Typography>
          <br></br>
          <ArrowRightAltIcon style={{ transform: `rotate(${props.weatherData.wind.deg}deg)` }}></ArrowRightAltIcon>
        </Box>
      </div>
      <div className="location">
        <p id="city-name">{props.weatherData.name}</p>
        <img style={{ marginTop: "-8px" }} src={`https://www.countryflags.io/${props.weatherData.sys.country}/flat/32.png`}></img>
        <br></br>
        <Button
          id={props.idfd}
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: "100px", opacity: "0.5" }}
          onClick={(e) => {}}
        >
          remove
        </Button>
      </div>
    </div>
  );
}

export default WeatherDisplay;
