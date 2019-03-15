import React from "react";
import RequestItem from "./RequestItem";
import PropTypes from "prop-types";
import fetchProfiles from "../common/hoc/fetchProfiles";

const FriendRequests = ({ profile, profiles }) => {
  return profile.friendRequests.map(request => (
    <RequestItem
      key={request._id}
      request={request}
      profile={profile}
      profiles={profiles}
    />
  ));
};

FriendRequests.propTypes = {
  profile: PropTypes.object.isRequired
};
export default fetchProfiles(FriendRequests);
