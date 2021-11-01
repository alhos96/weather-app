import "./App.css";
import React, { useState, useEffect } from "react";
import { WeatherCard } from "./Components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import weatherApi from "./axios";
import useLocalStorage from "./hooks/useLocalStorage";
import Form from "./Components/Form";

function App() {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const [location, setLocation] = useState("");
  const [currentLocations, setCurrentLocations] = useLocalStorage("currentLocations", []);
  //WeatherCards will be rendered based on city names from this state
  const [listOfCurrentLocations, setListOfCurrentLocations] = useState([]);

  //click on add button will add empty string to localStorage state. On each such occasion this state has to update so the correct number of cards is displayed
  useEffect(() => {
    setListOfCurrentLocations(JSON.parse(localStorage.getItem("currentLocations")));
  }, [currentLocations]);

  useEffect(() => {
    setCount((e) => e + 1);
  }, [currentLocations]);

  return (
    <div className="App">
      {listOfCurrentLocations &&
        listOfCurrentLocations.map((e, i) => {
          if (e == null || undefined) {
            return null;
          } else {
            return (
              <WeatherCard
                //in WeatherCard component initaly this will be empty string
                key={i}
                location={e}
                id={e}
                currentLocations={currentLocations}
                setCurrentLocations={setCurrentLocations}
                setLocation={setLocation}
                setDisable={setDisable}
              />
            );
          }
        })}

      <Button
        disabled={disable}
        onClick={() => {
          setCount((e) => e + 1);
          setCurrentLocations([...currentLocations, location]);
        }}
        variant="contained"
        color="primary"
        size="large"
        style={{ position: "absolute", top: "80vh", right: "10%", opacity: "0.5", borderRadius: "50%", height: "70px", width: "70px" }}
      >
        <AddIcon fontSize="large" />
      </Button>
    </div>
  );
}

export default App;
