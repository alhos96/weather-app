import React, { useEffect, useState } from "react";
import { LocationWeather } from "./index";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Form from "./Form";

function WeatherCard(props) {
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState();

  /* function handleSubmit(e) {
    e.preventDefault();
    setLocation(searchTerm);
  } */

  return (
    <div className="weather-card">
      {location ? (
        <LocationWeather location={location} setLocation={setLocation} cvl={props.cvl} idfd={props.idForDelete} scvl={props.scvl} />
      ) : (
        <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} setLocation={setLocation} setDisable={props.setDisable}></Form>
      )}
    </div>
  );
}

export default WeatherCard;
