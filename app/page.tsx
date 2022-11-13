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
      <div className="flex flex-col gap-10">
        {!stravaAuthToken && <LoginToStrava />}

        <StravaRouteMap stravaAuthToken={stravaAuthToken} />
      </div>

      <div className="fixed bottom-0 bg-red-300">
        <p> strava auth token : {stravaAuthToken?.access_token}</p>
      </div>
    </main>
  );
}
