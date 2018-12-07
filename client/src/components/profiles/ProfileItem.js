import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-md-3">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <div style={{ fontSize: "25px" }}>{profile.user.name}</div>
            <p>
              {isEmpty(profile.location) ? null : (
                <span style={{ fontSize: "20px" }}>{profile.location}</span>
              )}
            </p>
            <Link
              style={{ fontSize: "20px" }}
              to={`/profile/${profile.handle}`}
              className="btn btn-info mt-3"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
