import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import Section from "../components/Section";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import Appbar from "../components/Appbar";
import { contactsOperations, contactsSelectors } from "../redux/contacts";
import "../animations/filter.css";
import "../animations/error.css";
import "../animations/list.css";

const ContactsView = ({ shouldFilterAppear, shouldListAppear }) => (
  <>
    <Appbar></Appbar>
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

const mapStateToProps = (state) => ({
  shouldListAppear: contactsSelectors.isLengthNotZero(state),
  shouldFilterAppear: contactsSelectors.isLengthMoreThanOne(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
