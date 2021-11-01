import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form({ setLocation, setDisable, currentLocations, setCurrentLocations }) {
  const [searchTerm, setSearchTerm] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    setCurrentLocations(
      //Because WeatherCards are rendered based on this state there was allways one extra card because "location" is allways empty string initialy when added on "add" button. This removes that string and places searchTerm on it's spot.
      currentLocations.map((e) => {
        if (e == "") {
          return (e = searchTerm);
        } else {
          return e;
        }
      })
    );
  }

  useEffect(() => {
    //if Form is rendered button for adding new cards will be disabled. src(App.js)
    setDisable(true);

    //button is enabled once Form is unmounted. src(App.js)
    return () => {
      setDisable(false);
    };
  }, []);

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        sx={{ ml: 2 }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        label="Location"
        variant="standard"
        size="small"
        margin="normal"
      />
      <br />
      <Button sx={{ ml: 2 }} type="submit">
        Search
      </Button>
    </form>
  );
}

export default Form;
