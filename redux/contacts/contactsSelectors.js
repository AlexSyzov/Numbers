import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const isLengthNotZero = (state) => state.contacts.items.length > 0;

const isLengthMoreThanOne = (state) => state.contacts.items.length > 1;

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
  getContacts,
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById,
  isLengthNotZero,
  isLengthMoreThanOne,
};
