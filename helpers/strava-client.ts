import strava from "strava-v3";

strava.config({
  access_token: process.env.STRAVA_ACCESS_TOKEN as string,
  client_id: process.env.STRAVA_CLIENT_ID as string,
  client_secret: process.env.STRAVA_CLIENT_SECRET as string,
  redirect_uri: "",
});

const stravaClient = strava;

export default stravaClient;
