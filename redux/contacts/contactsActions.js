import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const removeContact = createAction("contacts/remove");
const changeFilter = createAction("contacts/changeFilter");
const updateContacts = createAction("contacts/update");

const actions = {
  addContact,
  removeContact,
  changeFilter,
  updateContacts,
};

export default actions;
