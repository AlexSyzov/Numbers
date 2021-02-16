import React, { Component } from "react";
import { connect } from "react-redux";
import Appbar from "../components/Appbar";
import { authOperations } from "../redux/auth";
import { Form, FormInput, FormLabel, Button } from "../styled";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <Appbar />
        <Form onSubmit={this.handleFormSubmission}>
          <FormLabel>
            Name
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Email
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Password
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <Button type="submit" disabled={!name || !email || !password}>
            Sign up
          </Button>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
