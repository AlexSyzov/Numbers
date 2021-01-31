import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [(_, id) => id, getContacts],
  (id, contacts) => {
    return contacts.find((item) => item.id === id);
  }
);

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById,
};
