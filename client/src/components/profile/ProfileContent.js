import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/profileActions";
import { Header } from "../common/styles/Header";
import { Button } from "../common/styles/Button";

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
          <img
            style={{ width: "250px", height: "250px" }}
            src={profile.profileImage}
            alt=""
          />
        </div>
        <div className="text-center">
          <strong>{profile.handle}</strong>
        </div>
        <div className="text-center mt-2">
          {isEmpty(profile.location) ? (
            <p>
              <i>No location provided</i>
            </p>
          ) : (
            <strong>{profile.location}</strong>
          )}
          {isEmpty(profile.bio) ? (
            <p>
              <i>No description provided</i>
            </p>
          ) : (
            <div className="text-center pr-5 pl-5 mt-2 mb-5">{profile.bio}</div>
          )}
        </div>
        <div className="text-center">
          <div>
            {isEmpty(profile.social && profile.social.facebook) ? null : (
              <Button
                href={profile.social.facebook}
                fb
                className="btn btn-sm mr-3"
              >
                <i className="fab fa-facebook mr-2" />
                Facebook
              </Button>
            )}
            {isEmpty(profile.social && profile.social.instagram) ? null : (
              <Button
                href={profile.social.instagram}
                inst
                className="btn btn-sm"
              >
                <i className="fab fa-instagram mr-2" />
                Instagram
              </Button>
            )}
          </div>
          <div className="mt-2">
            {isEmpty(profile.social && profile.social.youtube) ? null : (
              <Button
                href={profile.social.youtube}
                yt
                className="btn btn-sm mr-3"
              >
                <i className="fab fa-youtube mr-2" />
                YouTube
              </Button>
            )}
            {isEmpty(profile.social && profile.social.twitter) ? null : (
              <Button href={profile.social.twitter} twit className="btn btn-sm">
                <i className="fab fa-twitter mr-2" />
                Twitter
              </Button>
            )}
          </div>
          {isEmpty(profile.social && profile.social.linkedin) ? null : (
            <Button
              href={profile.social.linkedin}
              linkd
              className="btn btn-sm mt-2"
            >
              <i className="fab fa-linkedin mr-2" />
              LinkedIn
            </Button>
          )}
        </div>

        {profile.user._id === user.id ? (
          <>
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-outline-danger float-right mt-4 mb-5 mb-md-0"
            >
              Delete Account
            </button>
            <Link
              to="/edit-profile"
              className="btn btn-outline-dark float-right mt-4 mr-2"
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
  currentProfile: PropTypes.object.isRequired,
  profiles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteAccount }
)(ProfileContent);
