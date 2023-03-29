import React from "react";
import { Grid, Typography } from "@mui/material";
import Chart from "./components/Chart";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <Grid container direction="column">
      {/* <Typography align="center" sx={{ my: "2rem" }}>
        Data Visualization - Bitcoin prizes
      </Typography>
      <Chart /> */}
      <LandingPage />
    </Grid>
  );
}

export default App;
