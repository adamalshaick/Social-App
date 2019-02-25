import React, { Component } from "react";
import RequestItem from "./RequestItem";
import PropTypes from "prop-types";

class FriendRequests extends Component {
  render() {
    const { profile, profiles } = this.props;
    return profile.friendRequests.map(request => (
      <RequestItem
        key={request._id}
        request={request}
        profile={profile}
        profiles={profiles}
      />
    ));
  }
}

FriendRequests.propTypes = {
  profile: PropTypes.object.isRequired
};

export default FriendRequests;
