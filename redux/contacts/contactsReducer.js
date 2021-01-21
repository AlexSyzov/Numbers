import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, { payload }) => [...state, payload.contact];

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

const updateContacts = (_, { payload }) => payload;

const changeFilter = (_, { payload }) => payload;

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.removeContact]: removeContact,
  [contactsActions.updateContacts]: updateContacts,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: changeFilter,
});

export default combineReducers({ items, filter });
