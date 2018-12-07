import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split("")[0];
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-light mb-3">
            <div className="text-center text-info">{firstName}'s Bio</div>
            <p className="lead">
              {isEmpty(profile.bio) ? (
                <span>{firstName} doesn't have a Bio.</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
