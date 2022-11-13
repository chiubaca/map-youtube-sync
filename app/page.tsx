import ClientShell from "../components/client-shell";
import LoginToStrava from "../components/login-top-strava";
import StravaRouteMap from "../components/strava-route-map/strava-route-map";
import stravaClient from "../helpers/strava-client";

interface StravaOauth {
  code?: string;
}

interface Page {
  searchParams: StravaOauth;
}

const getStravaToken = async (code: string) => {
  const token = await stravaClient.oauth.getToken(code);
  console.log("🚀 ~ file: page.tsx ~ line 18 ~ getStravaToken ~ token", token);
  return token;
};

const getStravaAuthToken = async (code: string | undefined) => {
  if (!code) {
    console.log("not strava authorised");
    return null;
  }

  try {
    const auth = await getStravaToken(code);

    return auth;
  } catch (e) {
    console.error("couldnt get token", e);

    return null;
  }
};

export default async function Home({ searchParams }: Page) {
  const stravaAuthToken = await getStravaAuthToken(searchParams.code);

  return (
    <main className="grid justify-center ">
      <ClientShell stravaAuthToken={stravaAuthToken} />
    </main>
  );
}
