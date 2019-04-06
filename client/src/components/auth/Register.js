import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import InputGroup from "../common/InputGroup";
import handleInputErrors from "../common/hoc/handleInputErrors";
import redirectAuthenticated from "../common/hoc/redirectAuthenticated";
import { ShadowCard } from "../common/styles/ShadowCard";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
                <h3 className="mb-5">Sign up</h3>
                <form noValidate onSubmit={this.onSubmit}>
                  <InputGroup
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                    icon={"fas fa-signature"}
                  />
                  <InputGroup
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    icon={"far fa-envelope"}
                  />
                  <InputGroup
                    id="password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                    icon={"fas fa-unlock"}
                  />
                  <InputGroup
                    id="password2"
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                    icon={"fas fa-unlock"}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-4"
                  >
                    Create Account
                  </button>
                </form>
              </div>
              <div className="text-muted card-footer mt-3">
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </ShadowCard>
          </div>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { registerUser }
)(handleInputErrors(redirectAuthenticated(Register)));
