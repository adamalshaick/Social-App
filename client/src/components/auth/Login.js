import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import InputGroup from "../common/InputGroup";
import Navbar from "../layout/Navbar";
import handleInputErrors from "../common/hoc/handleInputErrors";
import redirectAuthenticated from "../common/hoc/redirectAuthenticated";
import { ShadowCard } from "../common/styles/ShadowCard";

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
        <div className="container">
          <div className="row mt-5 entry">
            <div className="col-md-2 col-lg-3" />
            <ShadowCard className="col-md-8 col-lg-6 card mt-5 text-center p-0 ">
              <div className="card-body p-5">
                <h3 className="mb-5">Log in to your account</h3>
                <form noValidate onSubmit={this.onSubmit}>
                  <InputGroup
                    placeholder="Email Adress"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    id="email"
                    icon={"far fa-envelope"}
                  />
                  <InputGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                    id="password"
                    icon={"fas fa-unlock"}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-4"
                  >
                    Log In
                  </button>
                </form>
              </div>
              <div className="text-muted card-footer mt-3">
                Don't have an account yet? <Link to="/register">Sign Up</Link>
              </div>
            </ShadowCard>
          </div>
        </div>
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
