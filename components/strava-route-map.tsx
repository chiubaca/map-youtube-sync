"use-client";

export default function StravaRouteMap({
  stravaAuthToken,
}: {
  stravaAuthToken: any;
}) {
  return (
    <div className="flex flex-col gap-10">
      <input
        type="text"
        placeholder="Strava acrtivity id"
        className="input w-full max-w-xs"
      />
      <button className="btn">Get Route</button>
    </div>
  );
}
