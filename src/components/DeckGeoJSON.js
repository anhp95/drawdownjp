import React, { useState } from "react";
import { scaleThreshold } from "d3-scale";
import * as d3 from "d3";

import DeckGL from "@deck.gl/react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
// eslint-disable-next-line
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { GeoJsonLayer } from "@deck.gl/layers";
import { GrCircleInformation } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import local_json from "../data/geo_emission.json";

mapboxgl.workerClass = MapboxWorker;

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW5ocCIsImEiOiJja2xpcXZnZ3MycTE5MndxZXgwdHRwM2RpIn0.3Y6CVuK_RTZ1kTMsuF8wvw";

const COLOR_DOMAIN = [
  100, 500, 1000, 2000, 3000, 5000, 7000, 9000, 11000, 13000, 15000, 17000,
  20000,
];

const COLOR_RANGE = [
  [65, 182, 196],
  [127, 205, 187],
  [199, 233, 180],
  [237, 248, 177],
  // zero
  [255, 255, 204],
  [255, 237, 160],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [252, 78, 42],
  [227, 26, 28],
  [189, 0, 38],
  [128, 0, 38],
];

const COLOR_SCALE = scaleThreshold().domain(COLOR_DOMAIN).range(COLOR_RANGE);

const getTooltip = ({ object }) => {
  return (
    object && {
      html: `\
  <div><b>Total Emission</b></div>
  <div>${object.properties.pref}</div>
  <div>${object.properties.city}</div>
  <div>${object.properties.total}</div>
  `,
    }
  );
};

const gen_lengend = () => {
  const id = "#legend_svg";
  const svg = d3.select(id);
  const width = 20;
  const height = 10;
  svg
    .selectAll("rect")
    .data(COLOR_RANGE)
    .enter()
    .append("rect")
    .attr("x", (d, i) => {
      return i * (width + 0);
    })
    .attr("y", "10px") // 100 is where the first dot appears. 25 is the distance between dots
    .attr("width", width)
    .attr("height", height)
    .style("fill", (d) => {
      return "rgb(" + d + ")";
    });

  // Add one dot in the legend for each name.
  // svg
  //   .selectAll("mylabels")
  //   .data(COLOR_RANGE)
  //   .enter()
  //   .append("text")
  //   .attr("x", (d, i) => {
  //     return 10 * i + 0 + "px";
  //   })
  //   .attr("y", "100px") // 100 is where the first dot appears. 25 is the distance between dots
  //   .text(function (d) {
  //     return d;
  //   })
  //   .attr("text-anchor", "left")
  //   .style("alignment-baseline", "middle");
};
const DeckGeoJSON = () => {
  const initial_view_state = {
    latitude: 35.081053,
    longitude: 136.876717,
    zoom: 5,
    maxZoom: 16,
    pitch: 45,
    bearing: 0,
  };

  const layer = new GeoJsonLayer({
    id: "geojson",
    data: local_json,
    // opacity: 0.8,
    stroked: true,
    filled: true,
    extruded: true,
    getElevation: (f) => Math.sqrt(f.properties.total) * 100,
    getFillColor: (f) => {
      gen_lengend();
      return COLOR_SCALE(f.properties.total);
    },
    getLineColor: [255, 255, 255],
    pickable: true,
    autoHighlight: true,
    wireframe: false,
  });

  return (
    <DeckGL
      layers={layer}
      initialViewState={initial_view_state}
      controller={true}
      getTooltip={getTooltip}
    >
      <Map
        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
};

const MapLengend = () => {
  const [toggle_legend, setToggleLegend] = useState(true);
  return (
    <div className="flex flex-col sticky float-right m-4 p-5 bg-white w-80 rounded-lg">
      <div
        className="bg-white flex items-center"
        onClick={() => setToggleLegend(!toggle_legend)}
      >
        <div className="w-5/6">
          <h1 className="float-left text-md  font-bold">
            GHG Emission of Japan in 2005
          </h1>
        </div>
        <div className="w-1/6">
          <button
            className={`float-right ${!toggle_legend ? "block" : "hidden"}`}
          >
            <GrCircleInformation className=" text-xl" />
          </button>
          <button
            className={`float-right ${toggle_legend ? "block" : "hidden"}`}
          >
            <IoIosCloseCircleOutline className=" text-xl" />
          </button>
        </div>
      </div>
      <div className={`bg-white ${toggle_legend ? "block" : "hidden"}`}>
        <div className="text-sm mt-2">Height of polygon - GHG Emission</div>
        <div className="bg-slate-50">
          <svg id="legend_svg" height={20} />
        </div>
        <div className="text-sm tracking-wide mt-2">
          Datasource:
          <span> </span>
          <span className="text-cyan-400 font-semibold">MoE of Japan</span>
        </div>
        <div className="flex flex-row bg-slate-300 w-full mt-2">
          <div className="bg-orange-200 h-24 w-1/2">
            <p className="text-center uppercase">Total Emission</p>
            <p className="text-center text-2xl font-bold">Total Emission</p>
          </div>
          <div className="bg-lime-300 h-24 w-1/2">
            <p className="text-center uppercase">Emission / capita</p>
            <p className="text-center text-2xl font-bold">Emission / capita</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckGeoJSON;
export { MapLengend };
