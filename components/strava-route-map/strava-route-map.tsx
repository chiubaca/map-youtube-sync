"use client";

import { useState } from "react";
import stravaClient from "../../helpers/strava-client";
import Map from "./map";

export default function Inputs({ stravaAuthToken }: { stravaAuthToken: any }) {
  const [routeId, setRouteId] = useState<null | string>(null);

  return (
    <div className="flex flex-col gap-10">
      <input
        type="text"
        placeholder="Strava activity id"
        className="input w-full max-w-xs"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() => {
          console.log("run query");
        }}
      >
        Get Route
      </button>

      <Map routeId={routeId} />
    </div>
  );
}
