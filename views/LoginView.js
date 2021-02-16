import React, { Component } from "react";
import { connect } from "react-redux";
import Appbar from "../components/Appbar";
import { authOperations } from "../redux/auth";
import { Form, FormInput, FormLabel, Button } from "../styled";

class LoginView extends Component {
  state = {
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
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <Appbar />
        <Form onSubmit={this.handleFormSubmission}>
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
          <Button type="submit" disabled={!email || !password}>
            Log in
          </Button>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
