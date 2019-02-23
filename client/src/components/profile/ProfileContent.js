import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/profileActions";

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 400;
`;

const Button = styled.div`
  color: white;
  width: 120px;
  background-color: ${props =>
    props.fb
      ? "#3B5998"
      : props.inst
      ? "#49769C"
      : props.yt
      ? "#FF0000"
      : props.twit
      ? "#55ACEE"
      : props.linkd
      ? "#1F88BE"
      : "white"};
`;

class ProfileContent extends Component {
  onDeleteClick() {
    this.props.deleteAccount();
  }

  render() {
    const { profile, user } = this.props;

    return (
      <>
        <Header className="text-center">
          {profile.user._id === user.id
            ? "Your profile"
            : `${profile.handle}'s profile`}
        </Header>
        <hr />
        <div className="text-center mt-5">
          <img src={profile.user.avatar} alt="" />
        </div>
        <div className="text-center">
          <strong>{profile.handle}</strong>
        </div>
        <div className="text-center mt-2">
          <strong>{profile.location}</strong>
        </div>
        <div className="text-center pr-5 pl-5 mt-2 mb-5">{profile.bio}</div>
        <div className="text-center">
          <div>
            <Button fb className="btn btn-sm mr-3">
              <i className="fab fa-facebook mr-2" />
              Facebook
            </Button>
            <Button inst className="btn btn-sm">
              <i className="fab fa-instagram mr-2" />
              Instagram
            </Button>
          </div>
          <div className="mt-2">
            <Button yt className="btn btn-sm mr-3">
              <i className="fab fa-youtube mr-2" />
              YouTube
            </Button>
            <Button twit className="btn btn-sm">
              <i className="fab fa-twitter mr-2" />
              Twitter
            </Button>
          </div>
          <Button linkd className="btn btn-sm mt-2">
            <i className="fab fa-linkedin mr-2" />
            LinkedIn
          </Button>
        </div>

        {profile.user._id === user.id ? (
          <>
            <div className="btn btn-outline-danger float-right mt-4">
              Delete Account
            </div>
            <Link
              to="/edit-profile"
              className="btn btn-outline-dark float-right mt-4 mr-md-2"
            >
              Edit Profile
            </Link>
          </>
        ) : null}
      </>
    );
  }
}
ProfileContent.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  profiles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteAccount }
)(ProfileContent);
