import React, { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Chart from "../components/Chart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

import { orange } from "@mui/material/colors";
import ChartTest2 from "../components/ChartTest2";

const LandingPage = () => {
  return (
    <Grid container direction="column">
      <Grid item sx={{ mt: "1rem", ml: "5%", mb: "1rem" }} align="center">
        <Stack direction="row" spacing={3}>
          <CurrencyBitcoinIcon
            sx={{ fontSize: "3rem", mt: "0.8rem", color: orange[500] }}
          />
          <Typography
            align="left"
            sx={{ fontWeight: "bold", fontSize: "3rem", color: "#4a4242" }}
          >
            Bitcoin/Ethereum Price - 2022
          </Typography>
        </Stack>
      </Grid>

      {/* <Chart /> */}
      {/* <ChartTest /> */}
      <ChartTest2 />
    </Grid>
  );
};

export default LandingPage;
