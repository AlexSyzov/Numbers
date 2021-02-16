import contactsActions from "./contactsActions";
import axios from "axios";

const addContact = (name, number) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest());

  try {
    const { data } = await axios.post("/contacts", {
      name,
      number,
    });

    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(contactsActions.removeContactRequest());

  try {
    axios.delete(`/contacts/${id}`);

    dispatch(contactsActions.removeContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.removeContactError(error));
  }
};

const operations = {
  addContact,
  fetchContacts,
  removeContact,
};

export default operations;
