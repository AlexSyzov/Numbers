import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, { payload }) => [...state, payload];

const removeContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

const changeFilter = (_, { payload }) => payload;

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: removeContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: changeFilter,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
});

export default combineReducers({ items, filter, loading });
