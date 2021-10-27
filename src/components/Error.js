import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

function Error(props) {
  return (
    <div>
      <Box sx={{ pt: 4 }}>
        <Typography variant="h5" color="error" fontWeight="200">
          {" "}
          {props.err}
        </Typography>
      </Box>
    </div>
  );
}

export default Error;
