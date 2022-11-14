"use client";
import * as React from "react";
import Map, { Source, Layer, LayerProps, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface RouteMap {
  routeGeoJson: GeoJSON.FeatureCollection;
  markerPoint: GeoJSON.FeatureCollection;
}

const lineStyle: LayerProps = {
  id: "route",
  type: "line",
  paint: {
    "line-color": "#be1212",
    "line-width": 8,
  },
};

const pointStyle: LayerProps = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#223b53",
  },
};

export default function RouteMap({ routeGeoJson, markerPoint }: RouteMap) {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
    >
      <Source id="route" type="geojson" data={routeGeoJson}>
        <Layer {...lineStyle} />
      </Source>

      <Source id="point" type="geojson" data={markerPoint}>
        <Layer {...pointStyle} />
      </Source>
    </Map>
  );
}
