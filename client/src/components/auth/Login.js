import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import InputGroup from "../common/InputGroup";
import Navbar from "../layout/Navbar";
import handleInputErrors from "../common/hoc/handleInputErrors";
import redirectAuthenticated from "../common/hoc/redirectAuthenticated";
import { Button } from "../common/styles/Button";
import { Card } from "../common/styles/AuthPage.js";
import {
  Header,
  SecondaryHeader,
  IconWrapper,
  Icon
} from "../common/styles/Header.js";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.props;

    return (
      <>
        <Navbar />
        <Card>
          <IconWrapper>
            <Icon className="fas fa-lock" />
          </IconWrapper>

          <Header>Log in</Header>
          <SecondaryHeader>to your account</SecondaryHeader>
          <form noValidate autocomplete="off" onSubmit={this.onSubmit}>
            <InputGroup
              placeholder="Email Adress"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              id="email"
            />
            <InputGroup
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              id="password"
            />

            <Button type="submit">LOG IN</Button>
          </form>
          <div>
            Don't have an account yet? <Link to="/register">Sign Up</Link>
          </div>
        </Card>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { loginUser }
)(redirectAuthenticated(handleInputErrors(Login)));
