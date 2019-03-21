import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sendFriendRequest } from "../../actions/profileActions";
import { connect } from "react-redux";
import { ProfileCard } from "../common/styles/ProfileCard";

class ProfileItem extends Component {
  onClick = () => {
    this.props.sendFriendRequest(this.props.profile.user._id);
  };
  render() {
    const { profile, currentProfile } = this.props;
    return (
      <div className="col-12 col-xl-6 entry">
        <ProfileCard className="text-center p-1">
          <Link to={`/profile/${profile.handle}`}>
            <div>
              {/* Display friend marker */}
              {profile.friends.find(
                friend => friend._id === currentProfile.user._id
              ) ? (
                <i
                  style={{ color: "lightgreen" }}
                  className="far fa-check-circle mr-2"
                />
              ) : null}

              {profile.handle}
            </div>
            <img
              style={{ height: "200px", width: "200px" }}
              // src={`../uploads/post_image/${profile.profileImage}`}
              src="../uploads/post_image/placeholder.png"
            />
          </Link>
          {profile.friends.find(
            friend => friend._id === currentProfile.user._id
          ) ? null : profile.friendRequests.find(
              request => request === currentProfile.user._id
            ) ? (
            <div className="center entry">
              <i>Request sent</i>
            </div>
          ) : (
            <div className="text-center">
              <button
                className="btn btn-outline-primary btn-sm mt-3"
                onClick={this.onClick}
              >
                Send friend request
                <i className="fas fa-arrow-circle-right ml-2" />
              </button>
            </div>
          )}
        </ProfileCard>
        {/* Check if profile is already in current users friend list / if request is already sent */}
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  sendFriendRequest: PropTypes.func.isRequired
};

export default connect(
  null,
  { sendFriendRequest }
)(ProfileItem);
