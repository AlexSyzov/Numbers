import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import Filter from "./components/Filter";
import Layout from "./components/Layout";
import Error from "./components/Error";
import "./animations/filter.css";
import "./animations/error.css";
import "./animations/list.css";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    error: false,
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");

    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const { contacts: prevContacts } = prevState;

    if (prevContacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (name, number) => {
    if (this.isInContacts(name)) {
      this.setState({ error: true });

      setTimeout(() => {
        this.setState({ error: false });
      }, 3500);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuidv4(), name, number }],
      error: false,
    }));
  };

  isInContacts = (name) => {
    return this.state.contacts.some(
      (contact) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );
  };

  handleContactDeletion = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getVisibleContacts = (e) => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, error } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <CSSTransition
          in={error}
          appear={true}
          timeout={250}
          classNames="Error"
          unmountOnExit
        >
          <Error />
        </CSSTransition>

        <Layout>
          <Section title="Phonebook">
            <ContactForm onFormSubmission={this.handleFormSubmission} />
          </Section>

          <Section>
            <CSSTransition
              in={contacts.length > 1}
              timeout={250}
              classNames="Filter"
              unmountOnExit
            >
              {(stage) => (
                <Filter
                  stage={stage}
                  filter={filter}
                  onInputChange={this.handleInputChange}
                />
              )}
            </CSSTransition>

            <CSSTransition
              in={contacts.length > 0}
              timeout={250}
              classNames="List-slide"
              unmountOnExit
            >
              <ContactList
                contacts={visibleContacts}
                onContactDeletion={this.handleContactDeletion}
              />
            </CSSTransition>
          </Section>
        </Layout>
      </>
    );
  }
}
