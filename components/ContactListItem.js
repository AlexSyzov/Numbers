import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import { ListItem, ListItemButton, Name } from "../styled";

const ContactListItem = ({ name, number, onContactDeletion }) => {
  return (
    <ListItem>
      <Name>{name.trim()}</Name> <span>{number}</span>
      <ListItemButton type="button" onClick={onContactDeletion}>
        X
      </ListItemButton>
    </ListItem>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);

  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onContactDeletion: () =>
    dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
