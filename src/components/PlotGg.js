import { Chart } from "react-google-charts";

import React from "react";

const PlotGg = () => {
  return (
    <Chart
      chartType="ScatterChart"
      data={[
        ["Age", "Weight"],
        [4, 5.5],
        [8, 12],
      ]}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export const data = [
  ["Style", "Colonial", "Victorian", "Modern", "Contemporary"],
  ["2013", 5.2, 3.6, 2.8, 2],
  ["2014", 5.6, 4.0, 2.8, 3],
  ["2015", 7.2, 2.2, 2.2, 6.0],
  ["2016", 8.0, 1.7, 0.8, 4.0],
];

export const options = {
  isStacked: "relative",
  height: 400,
  legend: { position: "center", maxLines: 4 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.3, 0.6, 0.9, 1],
  },
};

function SteppedArea() {
  return (
    <Chart
      chartType="SteppedAreaChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
      legendToggle
    />
  );
}

export default PlotGg;
export { SteppedArea };
