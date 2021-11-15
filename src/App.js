import "./App.css";
import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [disable, setDisable] = useState(false);
  const [location, setLocation] = useState("");
  const [currentLocations, setCurrentLocations] = useLocalStorage("currentLocations", []);

  return (
    <div className="App">
      {currentLocations &&
        currentLocations.map((e, i) => {
          if (e == null || undefined) {
            return null;
          } else {
            return (
              <WeatherCard
                key={i}
                //in WeatherCard component initaly this will be empty string
                location={e}
                id={e}
                currentLocations={currentLocations}
                setCurrentLocations={setCurrentLocations}
                setLocation={setLocation}
                setDisable={setDisable}
                i={i}
              />
            );
          }
        })}

      <Button
        disabled={disable}
        onClick={() => {
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
