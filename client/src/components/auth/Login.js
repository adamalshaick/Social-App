import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import InputGroup from "../common/InputGroup";
import Navbar from "../layout/Navbar";
import handleInputErrors from "../common/hoc/handleInputErrors";
import redirectAuthenticated from "../common/hoc/redirectAuthenticated";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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
        <div className="container">
          <div className="row mt-5 entry">
            <div className="col-md-2 col-lg-3" />
            <div
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
              className="col-md-8 col-lg-6 card mt-5 text-center p-0 "
            >
              <div className="card-body p-5">
                <h3 className="mb-5">Log in to your account</h3>
                <form noValidate onSubmit={this.onSubmit}>
                  <InputGroup
                    id="#email"
                    placeholder="Email Adress"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    id="email"
                  />

                  <InputGroup
                    id="#password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                    id="password"
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  >
                    Log In
                  </button>
                </form>
              </div>
              <div className="text-muted card-footer mt-3">
                Don't have an account yet? <Link to="/register">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { loginUser }
)(handleInputErrors(redirectAuthenticated(Login)));
