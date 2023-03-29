import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

const BitCoin = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Etherium = [
  {
    name: "01-03-2022",
    uv: 43046.58,
    pv: 0,
    amt: 2000,
  },
  {
    name: "28-02-2022",
    uv: 43178.98,
    pv: 0,
    amt: 2100,
  },
  {
    name: "27-02-2022 23.55",
    uv: 37738.56,
    pv: 0,
    amt: 2200,
  },
];

let currentData = "BitCoin";

const Chart = () => {
  const [coin, setCoin] = useState("BitCoin");

  const handleChange = (event) => {
    setCoin(event.target.value);
    currentData = event.target.value;
  };
  return (
    <Grid container direction="column">
      <Box sx={{ width: 120, ml: "5%", mb: "1rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Coin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coin}
            label="Coin"
            onChange={handleChange}
          >
            <MenuItem value={10}>BitCoin</MenuItem>
            <MenuItem value={20}>Etherium</MenuItem>
            <MenuItem value={30}>Tether</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <LineChart
        width={900}
        height={450}
        // data={currentData === 10 ? BitCoin : Etherium}
        data={BitCoin}
        style={{ marginLeft: "4%", marginTop: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis datakey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </Grid>
  );
};

export default Chart;
