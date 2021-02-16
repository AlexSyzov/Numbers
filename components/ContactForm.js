import React, { Component } from "react";
import { Form, FormInput, FormLabel, Button } from "../styled";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsOperations from "../redux/contacts/contactsOperations";
import Error from "./Error";
import "../animations/error.css";
class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ).isRequired,
    onContactAdding: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
    error: false,
  };

  componentDidMount() {
    this.props.onContactsFetching();
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!this.isInContacts(name)) {
      this.addContact(name, number);
      return;
    }

    this.handleError();
  };

  addContact = (name, number) => {
    this.props.onContactAdding(name, number);

    this.setState({
      name: "",
      number: "",
    });
  };

  handleError = () => {
    this.setState({ error: true });

    setTimeout(() => this.setState({ error: false }), 2500);
  };

  isInContacts = (name) => {
    return this.props.contacts.some(
      (contact) =>
        name.toLowerCase().trim() === contact.name.toLowerCase().trim()
    );
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmission}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            value={name}
            name="name"
            autoComplete="off"
            onChange={this.handleInputChange}
          />
        </FormLabel>

        <FormLabel>
          Number (xxx-xx-xx)
          <FormInput
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            autoComplete="off"
            value={number}
            name="number"
            onChange={this.handleInputChange}
          />
        </FormLabel>
        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
        <CSSTransition
          in={this.state.error}
          appear
          timeout={250}
          classNames="Error"
          unmountOnExit
        >
          <Error />
        </CSSTransition>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  onContactAdding: contactsOperations.addContact,
  onContactsFetching: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
