import Home from "./pages/Home"
import Drive from "./pages/Drive"
import {createGlobalStyle} from 'styled-components'
import Router,{Route,route} from "preact-router"
import Match from "preact-router/match"
export function App() {
  const navigate = path => {
    route(`/${path}`, true);
  };
  return (
    <>
      <GlobalStyle/>
      <Router >
        <Route path="/" component={Home}  />
        <Route path="/mydrive" component={Drive} />
      </Router>
    </>
  )
}
const GlobalStyle= createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body{
font-family: "DM Sans", sans-serif;
font-optical-sizing: auto;
background-color:#F8FAFD;
width:100%;
height:100vh;
}
`
