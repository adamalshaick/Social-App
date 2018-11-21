import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src={profile.user.avatar}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <div className="display-4 text-center">{profile.user.name}</div>
              <p className="lead text-center">
                {isEmpty(profile.location) ? null : <p>{profile.location}</p>}
              </p>
              {isEmpty(profile.social && profile.social.twitter) ? null : (
                <a
                  className="p-2"
                  href={profile.social.twitter}
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-2x" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
