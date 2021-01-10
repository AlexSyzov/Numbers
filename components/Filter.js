import React from "react";
import { Input, Label, FilterContainer } from "../styled";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "../animations/filterBlock.css";

const Filter = ({ stage, filter, onInputChange }) => {
  return (
    <CSSTransition
      appear
      in={stage === "entered"}
      timeout={250}
      classNames="Filter-block"
      unmountOnExit
    >
      <FilterContainer>
        <Label>
          Find contacts by name
          <Input
            type="text"
            value={filter}
            name="filter"
            onChange={onInputChange}
          />
        </Label>
      </FilterContainer>
    </CSSTransition>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
