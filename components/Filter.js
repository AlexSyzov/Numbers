import React from "react";
import { Input, Label, FilterContainer } from "../styled";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "../animations/filterBlock.css";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";
import contactsSelectors from "../redux/contacts/contactsSelectors";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <CSSTransition
      in={true}
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
            onChange={(e) => onFilterChange(e.target.value)}
          />
        </Label>
      </FilterContainer>
    </CSSTransition>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onFilterChange: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
