import React from "react";
import { ErrorBlock } from "../styled";
import { CSSTransition } from "react-transition-group";
import "../animations/error.css";

const Error = () => (
  <CSSTransition appear timeout={250} classNames="Error">
    <ErrorBlock>Contact is already in the list!</ErrorBlock>
  </CSSTransition>
);

export default Error;
