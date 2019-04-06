import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import styled from "styled-components";

const StyledNavbar = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  box-shadow: ${props =>
    props.landing ? "none" : "0px 8px 20px 0px rgba(204, 204, 204, 0.7)"};
`;

const List = styled.ul`
  display: flex;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  margin-top: 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ListElement = styled.li`
  margin: 0 2rem 2rem 0;
  list-style: none;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    margin: 0 4rem 4rem 0;
  }
`;

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <List>
        <ListElement>
          <Link style={{ color: "black" }} className="link" to="/dashboard">
            Dashboard
          </Link>
        </ListElement>
        <ListElement>
          <Link style={{ color: "black" }} className="link" to="/feed">
            Posts
          </Link>
        </ListElement>
        <ListElement>
          <Link
            style={{ color: "black" }}
            className="link"
            to="/"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </Link>
        </ListElement>
      </List>
    );

    const guestLinks = (
      <List>
        <ListElement>
          <Link className="link" to="/login">
            Login
          </Link>
        </ListElement>
        <ListElement>
          <Link className="link" to="/register">
            Sign Up
          </Link>
        </ListElement>
      </List>
    );
    let navbar;
    {
      this.props.landing
        ? (navbar = (
            <StyledNavbar landing className="text-center">
              {isAuthenticated ? authLinks : guestLinks}
            </StyledNavbar>
          ))
        : (navbar = (
            <StyledNavbar className="text-center">
              {isAuthenticated ? authLinks : guestLinks}
            </StyledNavbar>
          ));
    }

    return navbar;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
