import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Dynamicnavbar from "./components/DynamicNavbar/DynamicNavbar";
import Errorpage from "./pages/404/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Message from "./pages/Message/Message";
import Register from "./pages/Register/Register";
import Privateroute from "./privateRoutes/privateRoute";
import { useSelector } from "react-redux";
const App = () => {
  const { isLoggedIn } = useSelector((state) => state.authDetails);
  return (
    <BrowserRouter>
      <>
        <Container fluid className="main-app-wrapper p-0 overflow-hidden">
          <Dynamicnavbar
            isLoggedIn={isLoggedIn}
            brandName={"AuthenticationPracticle"}
          />
          <div className="main-app">
            <Switch>
              <Privateroute
                exact
                path="/"
                component={Home}
                isLoggedIn={isLoggedIn}
              />
              <Privateroute
                path="/message"
                component={Message}
                isLoggedIn={isLoggedIn}
              />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="*" component={Errorpage} />
            </Switch>
          </div>
        </Container>
      </>
    </BrowserRouter>
  );
};

export default App;
