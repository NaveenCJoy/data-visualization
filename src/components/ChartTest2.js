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
    name: "01/03/2022",
    Ethereum: 151.33,
    Bitcoin: 43046.58,
    amt: 2400,
  },
  {
    name: "28/02/2022",
    Ethereum: 158.61,
    Bitcoin: 43178.98,
    amt: 2210,
  },
  {
    name: "27/02/2022",
    Ethereum: 156.97,
    Bitcoin: 37712.68,
    amt: 2290,
  },
  {
    name: "26/02/2022",
    Ethereum: 160.21,
    Bitcoin: 39146.66,
    amt: 2000,
  },
  {
    name: "25/02/2022",
    Ethereum: 158.29,
    Bitcoin: 39231.64,
    amt: 2181,
  },
  {
    name: "24/02/2022",
    Ethereum: 158.26,
    Bitcoin: 38376.88,
    amt: 2500,
  },
  {
    name: "23/02/2022",
    Ethereum: 157.94,
    Bitcoin: 37274.18,
    amt: 2100,
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
        dataKey="Bitcoin"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Ethereum" stroke="#82ca9d" />
    </LineChart>
  );
};

export default ChartTest2;
