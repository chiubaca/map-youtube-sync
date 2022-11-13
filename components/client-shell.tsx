"use client";

import React from "react";
import LoginToStrava from "../components/login-top-strava";
import StravaRouteMap from "../components/strava-route-map/strava-route-map";
import VideoPlayer from "./video-player";
import type { VideoState } from "./video-player";

interface ClientShellProps {
  stravaAuthToken?: { access_token: string };
}

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

  return (
    <div>
      client shell
      <div className="flex flex-col gap-10">
        {!stravaAuthToken && <LoginToStrava />}
        <StravaRouteMap stravaAuthToken={stravaAuthToken} />

        <VideoPlayer videoState={videoState} setVideoState={setVideoState} />
      </div>
      <div className="fixed bottom-0 bg-red-300">
        <p> strava auth token : {stravaAuthToken?.access_token}</p>
      </div>
    </div>
  );
}
