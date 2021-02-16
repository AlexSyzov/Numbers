import React from "react";
import { Redirect, Route } from "react-router-dom";
import withAuth from "../hoc/withAuth";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
    }}
  />
);

export default withAuth(PrivateRoute);
