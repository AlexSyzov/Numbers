import React from "react";
import ContactListItem from "./ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "../animations/contacts.css";
import { connect } from "react-redux";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup
      component="ul"
      style={{ listStyleType: "none", marginLeft: 0 }}
    >
      {contacts.map((props) => (
        <CSSTransition key={props.id} timeout={250} classNames="Contact-slide">
          <ContactListItem {...props} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
