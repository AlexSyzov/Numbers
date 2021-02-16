import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const styles = {
  link: {
    marginRight: "12px",
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      style={styles.link}
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      style={styles.link}
      className="NavLink"
      activeClassName="NavLink--active"
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
