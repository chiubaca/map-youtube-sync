// 'use client';

// import { useRouter } from "next/router";

export default function LoginToStrava() {
  // const { query } = useRouter();
  // console.log("🚀 ~ file: page.tsx ~ line 7 ~ ExchangeToken ~ query", query);

  return (
    <button className="btn">
      <a href="http://www.strava.com/oauth/authorize?client_id=96983&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force&scope=activity:read">
        Login to strava to use existing a saved running route
      </a>
    </button>
  );
}
