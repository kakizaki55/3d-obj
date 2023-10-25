import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react"

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

  const [rerender, setRerender] = useState(false)

  useEffect(()=> {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')
    console.log('codeParam', codeParam)
    console.log(localStorage.getItem('accessToken'))
    
    if( codeParam && (localStorage.getItem("accessToken")) == null) {
      async function getAccessToken() {
        await fetch(`http://localhost:4000/getAccessToken?code=${codeParam}`, {
          method: "GET"
        }).then((response) => {
          return response.json()
        }).then((data) => {
          console.log( data + " this is the data in the front end")
          if(data.access_token){
            localStorage.setItem("accessToken", data.access_token)
            setRerender(!rerender)
          }
        })
      }

      getAccessToken()

    }
  }, [])



  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <button onClick={() => loginWithGitHub(CLIENT_ID)}>
        login with Github
      </button>
    </div>
  );
}
