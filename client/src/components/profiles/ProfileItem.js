import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import { sendFriendRequest } from "../../actions/profileActions";
import { connect } from "react-redux";
import styled from "styled-components";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderRadius: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
        className="bg-light mb-3 p-5"
      >
        <div className="row">
          <div className="col-md-3">
            <img src={profile.user.avatar} alt="" />
          </div>

          <div className="text-right col-9">
            <div style={{ fontSize: "25px" }}>{profile.user.name}</div>
            <p>
              {isEmpty(profile.location) ? null : (
                <span style={{ fontSize: "20px" }}>{profile.location}</span>
              )}
            </p>
            <Link
              style={{ fontSize: "20px" }}
              to={`/profile/${profile.handle}`}
              className="btn btn-primary mt-3"
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
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  sendFriendRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { sendFriendRequest }
)(ProfileItem);
