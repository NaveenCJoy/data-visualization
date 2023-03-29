import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "23/03",
    Tether: 1.00818,
    Solana: 0.951053977,
    WhiteBIT: 2.6589,
    amt: 2400,
  },
  {
    name: "24/02",
    Tether: 1.00601,
    Solana: 0.776818991,
    WhiteBIT: 2.325889,
    amt: 2210,
  },
  {
    name: "25/02",
    Tether: 0.750899,
    Solana: 0.882507026,
    WhiteBIT: 2.825889,
    amt: 2290,
  },
  {
    name: "26/02",
    Tether: 1.01247,
    Solana: 0.777831972,
    WhiteBIT: 2.525889,
    amt: 2000,
  },
  {
    name: "27/02",
    Tether: 0.899595,
    Solana: 0.661925018,
    WhiteBIT: 2.225889,
    amt: 2181,
  },
  {
    name: "28/02",
    Tether: 1.00683,
    Solana: 0.64665103,
    WhiteBIT: 2.625889,
    amt: 2500,
  },
  {
    name: "01/03",
    Tether: 1.00318,
    Solana: 0.690815985,
    WhiteBIT: 2.69289,
    amt: 2100,
  },
  {
    name: "02/03",
    Tether: 0.899595,
    Solana: 0.661925018,
    WhiteBIT: 2.225889,
    amt: 2181,
  },
  {
    name: "03/03",
    Tether: 1.00601,
    Solana: 0.776818991,
    WhiteBIT: 2.325889,
    amt: 2210,
  },
  {
    name: "04/03",
    Tether: 1.00683,
    Solana: 0.64665103,
    WhiteBIT: 2.225889,
    amt: 2500,
  },
];

const ChartTest2 = () => {
  return (
    <LineChart
      width={900}
      height={450}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Solana"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Tether" stroke="#f70505" />
      <Line type="monotone" dataKey="WhiteBIT" stroke="#82ca9d" />
    </LineChart>
  );
};

export default ChartTest2;
