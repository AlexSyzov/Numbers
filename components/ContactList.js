import React from "react";
import ContactListItem from "./ContactListItem";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "../animations/contacts.css";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const ContactList = ({ contacts, isLoadingContacts }) => {
  return (
    <>
      <TransitionGroup
        component="ul"
        style={{ listStyleType: "none", marginLeft: 0 }}
      >
        {contacts.map((props) => (
          <CSSTransition
            key={props.id}
            timeout={250}
            classNames="Contact-slide"
          >
            <ContactListItem {...props} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {isLoadingContacts && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          timeout={3000}
          width={100}
        />
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  const visibleContacts = contactsSelectors.getVisibleContacts(state);

  return {
    contacts: visibleContacts,
    isLoadingContacts: contactsSelectors.getLoading(state),
  };
};

export default connect(mapStateToProps)(ContactList);
