import React, { useState, useRef, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoDash } from "react-icons/go";
import mapboxgl from "mapbox-gl";
import Plot from "react-plotly.js";

import "../css/mapbox.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5ocCIsImEiOiJja2xpcXZnZ3MycTE5MndxZXgwdHRwM2RpIn0.3Y6CVuK_RTZ1kTMsuF8wvw";

const Map2D = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex-auto p-5 w-1/2">
        <h1 className="text-xl">Emission Overview</h1>
      </div>
      <div className="flex-auto p-5 w-1/2">
        <h1 className="text-sm float-right font-semibold underline">
          Emission Overview
        </h1>
        <h1 className="text-sm float-right"> Emission Tracker > {"\u00a0"}</h1>
        <h1 className="text-sm float-right ">
          {"\u00a0"} Home > {"\u00a0"}
        </h1>
        <AiOutlineHome className="float-right" />
      </div>
    </>
  );
};

const Figure = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
      ]}
      layout={{ width: 390, height: 270, title: "A Fancy Plot" }}
    />
  );
};

const PageContent = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  return (
    <>
      {/* Chart 1 */}
      <div className="flex-auto w-1/4 gap-1 m-1 bg-white border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left">Sample Chart 1</h1>
        <button className="float-right" onClick={() => setToggle1(!toggle1)}>
          <GoDash className="text-xl" />
        </button>
        <div className={`flex-auto h-64 ${toggle1 ? "hidden" : ""}`}>
          <Figure />
        </div>
      </div>
      {/* End Chart 1 */}
      {/* Chart 2 */}
      <div className="flex-auto w-1/4 gap-1 m-1 bg-white border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left">Sample Chart 2</h1>
        <button className="float-right" onClick={() => setToggle2(!toggle2)}>
          <GoDash className="text-xl" />
        </button>
        <div className={`flex-auto h-64 ${toggle2 ? "hidden" : ""}`}></div>
      </div>
      {/* End Chart 2 */}
      <div className="flex-auto w-1/4 gap-1 m-1 bg-white border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left">Sample Chart 2</h1>
        <button className="float-right" onClick={() => setToggle2(!toggle2)}>
          <GoDash className="text-xl" />
        </button>
        <div className={`flex-auto h-64 ${toggle2 ? "hidden" : ""}`}></div>
      </div>
      {/* End Chart 2 */}
      {/* Map */}
      <div className="flex-auto w-full gap-2 m-1 bg-white border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left">Map display</h1>
        <button className="float-right" onClick={() => setToggle3(!toggle3)}>
          <GoDash className="text-xl" />
        </button>
        <div className={`flex-auto h-96 ${toggle3 ? "hidden" : ""}`}>
          <Map2D />
        </div>
      </div>
      {/* End Map */}
    </>
  );
};

const EmissionOverview = () => {
  return (
    <>
      <Header />
      <PageContent />
    </>
  );
};

export default EmissionOverview;
