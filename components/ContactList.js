import React from "react";
import ContactListItem from "./ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "../animations/contacts.css";

const ContactList = ({ contacts, onContactDeletion }) => {
  return (
    <TransitionGroup
      component="ul"
      style={{ listStyleType: "none", marginLeft: 0 }}
    >
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames="Contact-slide">
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onContactDeletion={onContactDeletion}
          />
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
  onContactDeletion: PropTypes.func.isRequired,
};

export default ContactList;
