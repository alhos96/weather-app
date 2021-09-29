import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Input(props) {
  const [searchTerm, setSearchTerm] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.setLocation(searchTerm);
  }
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        label="Location"
        variant="standard"
        size="small"
        margin="normal"
      />
      <br />
      <Button type="submit">Search</Button>
    </form>
  );
}

export default Input;
