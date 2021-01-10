import React from "react";
import { Header } from "../styled";
import "../animations/title.css";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="Header-slideIn"
      >
        <Header>{title}</Header>
      </CSSTransition>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
