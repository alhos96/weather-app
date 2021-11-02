import React from "react";
import LocationWeather from "./LocationWeather";
import Form from "./Form";

function WeatherCard({ location, setLocation, setDisable, currentLocations, setCurrentLocations, id }) {
  return (
    <div className="weather-card">
      {/* location is allways empty string when the button is clicked*/}
      {location ? (
        <LocationWeather
          location={location}
          setLocation={setLocation}
          id={id}
          setCurrentLocations={setCurrentLocations}
          currentLocations={currentLocations}
        />
      ) : (
        <Form
          setLocation={setLocation}
          setDisable={setDisable}
          setCurrentLocations={setCurrentLocations}
          currentLocations={currentLocations}
        ></Form>
      )}
    </div>
  );
}

export default WeatherCard;
