import React, { useState } from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";
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
  const [coin, setCoin] = useState("BitCoin");

  const handleChange = (event) => {
    setCoin(event.target.value);
  };

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
            Cryptocurrency Price - 2016
          </Typography>
        </Stack>
      </Grid>
      <Grid item container direction="row">
        <Grid item sx={{ width: "65%" }}>
          <ChartTest2 />
        </Grid>
        <Grid item sx={{ width: "35%" }}>
          {/* <Grid item container direction="column">
            <Typography
              sx={{
                ml: "10%",
                fontWeight: "bold",
                fontSize: "2rem",
                color: "#4a4242",
              }}
            >
              Crypto Price Calculator
            </Typography>
            <Stack direction="row">
              <TextField sx={{ my: "1rem", ml: "10%" }}>Buy</TextField>
              <Box sx={{ width: 150, ml: "auto", mr: "10%", my: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Coin</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={coin}
                    label="Coin"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Solana</MenuItem>
                    <MenuItem value={20}>Tether</MenuItem>
                    <MenuItem value={30}>WhiteBIT</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
