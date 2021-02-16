import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from "../redux/contacts";
import { ListItem, ListItemButton, Name } from "../styled";

class ContactListItem extends Component {
  state = {
    changedName: null,
    changedNumber: null,
  };

  onChangeSubmission = (e) => {
    e.preventDefault();

    this.props.onContactChangeSubmission(this.props.id, { ...this.state });
  };

  render() {
    const { name, number, onContactDeletion } = this.props;

    return (
      <ListItem>
        <Name>{name.trim()}</Name> <span>{number}</span>
        <ListItemButton type="button" onClick={onContactDeletion}>
          X
        </ListItemButton>
      </ListItem>
    );
  }
}

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
