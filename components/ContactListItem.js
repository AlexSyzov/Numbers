import React from "react";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";
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
  const item = state.contacts.items.find((item) => item.id === ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onContactDeletion: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
