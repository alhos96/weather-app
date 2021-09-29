import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setLocation(props.searchTerm);
  }

  // this disables button
  useEffect(() => {
    props.setDisable(true);

    return () => {
      props.setDisable(false);
    };
  }, []);

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        sx={{ ml: 2 }}
        onChange={(e) => {
          props.setSearchTerm(e.target.value);
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
