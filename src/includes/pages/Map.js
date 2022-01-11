import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2F1cmF2OTYiLCJhIjoiY2t5MGNxejYyMDJnZDJvbnhyNzR4azlzMiJ9.FL0UtxOWzQcmExv8Hc2I3A";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 22.4843,
    longitude: 88.2609,
    zoom: 8,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <div style={{ height: "50vh", width: "50vh" }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: "relative", top: 0, left: 0, zIndex: 1 }}
      />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {" "}
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
    </div>
  );
};
export default Map;
