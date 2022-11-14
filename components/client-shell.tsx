"use client";

import React from "react";
import LoginToStrava from "../components/login-top-strava";
import StravaRouteMap from "../components/strava-route-map/strava-route-map";
import VideoPlayer from "./video-player";
import type { VideoState } from "./video-player";
import RouteMap from "./route-map";

import length from "@turf/length";
import along from "@turf/along";
import { lineString } from "@turf/helpers";

interface ClientShellProps {
  stravaAuthToken?: { access_token: string };
}

const geojson: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        coordinates: [
          [-118.23749967879087, 33.804137798689624],
          [-118.71421426758988, 34.17635010305074],
          [-119.41565847126759, 34.175339938108834],
          [-119.63977748150569, 34.40129158386945],
          [-119.72733656213677, 34.61347396232374],
        ],
        type: "LineString",
      },
    },
  ],
};

export default function ClientShell({ stravaAuthToken }: ClientShellProps) {
  const [videoState, setVideoState] = React.useState<VideoState>({
    url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    seeking: false,
  });

  const route = lineString(geojson.features[0].geometry.coordinates);

  const lengthOfRoute = length(route, { units: "kilometers" });

  const markerPoint = along(route, videoState.played * lengthOfRoute, {
    units: "kilometers",
  });

  return (
    <div>
      <div className="flex flex-col gap-10">
        {/* {!stravaAuthToken && <LoginToStrava />}
        <StravaRouteMap stravaAuthToken={stravaAuthToken} /> */}

        <VideoPlayer videoState={videoState} setVideoState={setVideoState} />

        <RouteMap routeGeoJson={geojson} markerPoint={markerPoint} />
      </div>
      <div className="fixed bottom-0 bg-red-300">
        <p> strava auth token : {stravaAuthToken?.access_token}</p>
      </div>
    </div>
  );
}
