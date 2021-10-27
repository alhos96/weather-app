import React, { useState } from "react";
import { LocationWeather } from "./index";
import Form from "./Form";

function WeatherCard(props) {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState();

  return (
    <div className="weather-card">
      {location ? (
        <LocationWeather location={location} setLocation={setLocation} cvl={props.cvl} idfd={props.idForDelete} scvl={props.scvl} />
      ) : (
        <Form
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setLocation={setLocation}
          setDisable={props.setDisable}
          cvl={props.cvl}
        ></Form>
      )}
    </div>
  );
}

export default WeatherCard;
