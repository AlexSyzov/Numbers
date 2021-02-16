import React from "react";
import { Redirect, Route } from "react-router-dom";
import withAuth from "../hoc/withAuth";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) => {
      return isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

export default withAuth(PublicRoute);
