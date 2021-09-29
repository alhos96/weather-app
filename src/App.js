import "./App.css";

import React, { useState, useEffect } from "react";
import { WeatherCard } from "./components";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [currentlyVisibleLocations, setcurrentlyVisibleLocations] = useLocalStorage("currentlyVisibleLocations", []);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <div className="App">
      {currentlyVisibleLocations.map((e, i) => {
        return (
          <WeatherCard
            key={i}
            idForDelete={i}
            cvl={currentlyVisibleLocations}
            scvl={setcurrentlyVisibleLocations}
            setDisable={setDisable}
          />
        );
      })}
      <Button
        disabled={disable}
        onClick={() => {
          currentlyVisibleLocations.push(<WeatherCard />);
          setCount((e) => e + 1);
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
