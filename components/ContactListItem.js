import React from "react";
import { ListItem, ListItemButton, Name } from "../styled";

const ContactListItem = ({ id, name, number, onContactDeletion }) => {
  return (
    <ListItem>
      <Name>{name.trim()}</Name> <span>{number}</span>
      <ListItemButton type="button" onClick={() => onContactDeletion(id)}>
        X
      </ListItemButton>
    </ListItem>
  );
};

export default ContactListItem;
