import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-webpack-loader-syntax
// eslint-disable-next-line
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import powerplant_json from "../data/power_plant.json";

mapboxgl.workerClass = MapboxWorker;
const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW5ocCIsImEiOiJja2xpcXZnZ3MycTE5MndxZXgwdHRwM2RpIn0.3Y6CVuK_RTZ1kTMsuF8wvw";

const getTooltip = ({ object }) => {
  return (
    object && {
      html: `\
    <div><b>Power Plant Profile</b></div>
    <div>${object.pp_type_en}</div>
    <div>${object.pp_name_en}</div>
    <div>${object.company_en}</div>
    <div>${object.output}</div>
    `,
    }
  );
};

function get_colour(d) {
  if (d === "Nuclear power") {
    return [255, 255, 0];
  } else if (d === "Firepower") {
    return [255, 0, 0];
  } else if (d === "Pumped storage") {
    return [0, 137, 138];
  } else if (d === "Hydropower") {
    return [0, 255, 255];
  } else if (d === "Geothermal") {
    return [255, 165, 0];
  } else if (d === "Wind power.") {
    return [133, 186, 86];
  } else if (d === "Thermal power (biomass)") {
    return [168, 62, 132];
  } else if (d === "Sun light") {
    return [110, 42, 144];
  } else {
    return [255, 255, 255];
  }
}

function DeckScatterPlot() {
  const INITIAL_VIEW_STATE = {
    latitude: 35.081053,
    longitude: 136.876717,
    pitch: 45,
    maxPitch: 60,
    bearing: 0,
    minZoom: 2,
    maxZoom: 30,
    zoom: 13,
  };

  const [initialViewState, setView] = useState({
    initialViewState: INITIAL_VIEW_STATE,
  });
  const layer = new ScatterplotLayer({
    id: "scatterplot-layer",
    data: powerplant_json,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: (d) => d.lng_lat,
    getRadius: (d) => Math.sqrt(d.output * 700),
    getFillColor: (d) => get_colour(d.pp_type_en),
    getLineColor: (d) => [0, 0, 0],
  });

  return (
    <div>
      <DeckGL
        layers={[layer]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        getTooltip={getTooltip}
      >
        <Map
          mapStyle="mapbox://styles/mapbox/dark-v10"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />
      </DeckGL>
    </div>
  );
}
export default DeckScatterPlot;
