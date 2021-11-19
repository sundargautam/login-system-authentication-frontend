import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

const Privateroute = ({ component: Component, isLoggedIn, ...rest }) => {
  if (isLoggedIn) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/login" />;
};

export default Privateroute;
