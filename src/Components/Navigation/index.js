import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material/";

export const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ minHeight: "100px" }}
        elevation={0}
        position="static"
        color="transparent"
      >
        <Toolbar>My website</Toolbar>
      </AppBar>
    </Box>
  );
};
