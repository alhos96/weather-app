import React, { useEffect, useState } from "react";
import { LocationWeather, Input } from "./index";

function WeatherCard(props) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    setNum((e) => e + 1);
  }, [props.location]);

  return <div className="weather-card">{props.location ? <LocationWeather /> : <Input setLocation={props.setLocation} />}</div>;
}

export default WeatherCard;
