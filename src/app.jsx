import Home from "./pages/Home"
import Drive from "./pages/Drive"
import { createGlobalStyle } from 'styled-components'
import Router, { Route, route } from "preact-router"
import Login from "./pages/Login"
import { useState } from "preact/hooks"
function Authenticate({ user, setUser }) {
  return (
    <>
      {user ? (
        <Drive user={user} />
      ) : (
        <Login setUser={setUser} />
      )
      }
    </>
  )
}
export function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Router >
        <Route path="/" component={Home} />
        <Route path="/mydrive" component={() => <Authenticate user={user} setUser={setUser} />} />
      </Router>
    </>
  )
}
const GlobalStyle = createGlobalStyle`
      *{
        margin:0;
      padding:0;
      box-sizing:border-box;
}
      body{
        font - family: "DM Sans", sans-serif;
      font-optical-sizing: auto;
      background-color:#F8FAFD;
      width:100%;
      height:100vh;
}
      `
