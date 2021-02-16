import React from "react";
import { NavLink } from "react-router-dom";
import withAuth from "../hoc/withAuth";
import "../styles.css";

const Navigation = ({ isAuthenticated }) => (
  <>
    <nav>
      <NavLink
        exact
        to="/"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  </>
);

export default withAuth(Navigation);
