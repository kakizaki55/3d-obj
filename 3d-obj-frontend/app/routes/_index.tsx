import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const CLIENT_ID = "926da06118abf355444f"

const loginWithGitHub = (clientId: string) => {
  window.location.assign(`https://github.com/login/oauth/authorize?client_id=${ clientId }`)
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <button onClick={() => loginWithGitHub(CLIENT_ID)}>
        login with Github
      </button>
    </div>
  );
}
