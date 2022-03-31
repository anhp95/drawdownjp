import React, { useState, useRef, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoDash } from "react-icons/go";
/* eslint import/no-webpack-loader-syntax: off */
import mapboxgl from "!mapbox-gl";
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
        <h1 className="text-sm float-right"> Emission Tracker / {"\u00a0"}</h1>
        <h1 className="text-sm float-right ">
          {"\u00a0"} Home / {"\u00a0"}
        </h1>
        <AiOutlineHome className="float-right" />
      </div>
    </>
  );
};

const Table = () => {
  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            Product name
          </th>
          <th scope="col" class="px-6 py-3">
            Color
          </th>
          <th scope="col" class="px-6 py-3">
            Category
          </th>
          <th scope="col" class="px-6 py-3">
            Price
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">Sliver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">$99</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">$99</td>
          <td class="px-6 py-4 text-right">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
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
      layout={{
        width: "auto",
        height: "300",
        title: "A Sample Plot",
      }}
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
      <div className="flex-auto w-1/4 m-2  border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left bg-teal-100">
          Sample Figure
        </h1>
        <button
          className="float-right bg-white"
          onClick={() => setToggle1(!toggle1)}
        >
          <GoDash className="text-xl" />
        </button>
        <div
          className={`flex-auto h-70  ${toggle1 ? "hidden bg-slate-100" : ""}`}
        >
          <Figure className="w-full h-full" />
        </div>
      </div>
      {/* End Chart 1 */}
      {/* Chart 2 */}
      <div className="flex-auto w-1/3 m-2  border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left bg-teal-100">
          Sample Table
        </h1>
        <button
          className="float-right bg-white"
          onClick={() => setToggle2(!toggle2)}
        >
          <GoDash className="text-xl" />
        </button>
        <div
          className={`flex-auto h-64 ${toggle2 ? "hidden bg-slate-100" : ""}`}
        >
          <Table />
        </div>
      </div>
      {/* End Chart 2 */}
      {/* Chart 3 */}
      {/* <div className="flex-auto w-1/4 gap-1 m-1 bg-white border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left">Sample Chart 2</h1>
        <button className="float-right" onClick={() => setToggle2(!toggle2)}>
          <GoDash className="text-xl" />
        </button>
        <div className={`flex-auto h-64 ${toggle2 ? "hidden" : ""}`}></div>
      </div> */}
      {/* End Chart 3 */}
      {/* Map */}
      <div className="flex-auto w-full m-2  border-t-2 border-slate-400">
        <h1 className="text-sm font-semibold float-left bg-teal-100">
          Map display
        </h1>
        <button
          className="float-right bg-white"
          onClick={() => setToggle3(!toggle3)}
        >
          <GoDash className="text-xl" />
        </button>
        <div
          className={`flex-auto h-96 ${toggle3 ? "hidden bg-slate-100" : ""}`}
        >
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
