/// app.js
import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { Tile3DLayer } from "@deck.gl/geo-layers";

import { CesiumIonLoader } from "@loaders.gl/3d-tiles";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

// eslint-disable-next-line import/no-unresolved
mapboxgl.workerClass = MapboxWorker;

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiYW5ocCIsImEiOiJja2xpcXZnZ3MycTE5MndxZXgwdHRwM2RpIn0.3Y6CVuK_RTZ1kTMsuF8wvw";

const CESIUM_ACCES_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZDM0NTQ2NC0zODQ2LTRmMmYtODI5Yi1hMGQxODgxMzc5M2IiLCJpZCI6NzU4LCJpYXQiOjE2MDkzMDAyMDJ9.gLTs2dRIDfU8ZAuA0qIAAxrO8UzKPjHad9Gc1JUmx18";
// Viewport settings

const ION_ASSET_ID = "548989";

function Deck() {
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
  const layer = new Tile3DLayer({
    id: "tile-3d-layer",
    data: `https://assets.cesium.com/${ION_ASSET_ID}/tileset.json`,
    loader: CesiumIonLoader,
    loadOptions: {
      "cesium-ion": { accessToken: CESIUM_ACCES_TOKEN },
    },
    onTilesetLoad: (tileset) => {
      const { cartographicCenter, zoom } = tileset;
      setView({
        initialViewState: {
          ...INITIAL_VIEW_STATE,
          longitude: cartographicCenter[0],
          latitude: cartographicCenter[1],
          zoom,
          bearing: INITIAL_VIEW_STATE.bearing,
          pitch: INITIAL_VIEW_STATE.pitch,
        },
      });
    },
  });

  return (
    <div>
      <DeckGL
        layers={[layer]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        <Map
          mapStyle="mapbox://styles/mapbox/navigation-day-v1"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />
      </DeckGL>
    </div>
  );
}
export default Deck;
