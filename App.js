import React, { Component } from "react";
import contactsOperations from "./redux/contacts/contactsOperations";
import { CSSTransition } from "react-transition-group";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import Filter from "./components/Filter";
import Layout from "./components/Layout";
import { connect } from "react-redux";
import "./animations/filter.css";
import "./animations/error.css";
import "./animations/list.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { shouldFilterAppear, shouldListAppear } = this.props;

    return (
      <>
        <Layout>
          <Section title="Phonebook">
            <ContactForm />
          </Section>

          <Section>
            <CSSTransition
              in={shouldFilterAppear}
              timeout={250}
              classNames="Filter"
              unmountOnExit
            >
              <Filter />
            </CSSTransition>

            <CSSTransition
              in={shouldListAppear}
              timeout={250}
              classNames="List-slide"
              unmountOnExit
            >
              <ContactList />
            </CSSTransition>
          </Section>
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  shouldListAppear: state.contacts.items.length > 0,
  shouldFilterAppear: state.contacts.items.length > 1,
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
