import React from "react";
import { Link } from "react-router-dom";
import ProfileItem from "../profiles/ProfileItem";
import fetchProfiles from "../common/hoc/fetchProfiles";

const FriendsFeed = ({ currentProfile, profiles }) => {
  let friendItems;
  // Check to see if user has friends
  if (currentProfile.friends && currentProfile.friends.length) {
    // Get all friends out of profiles array
    const friends = profiles.filter(friend =>
      currentProfile.friends.includes(friend.user._id)
    );
    // Create new array with friends content
    friendItems = friends.map(friend => (
      <ProfileItem
        key={friend._id}
        profile={friend}
        currentProfile={currentProfile}
      />
    ));
  } else {
    friendItems = (
      <div className="text-center col-12">
        <p>
          <i>You didn't add any friend yet</i>
        </p>
        <Link to="/feed" className="btn btn-outline-dark">
          Browse Profiles
        </Link>
      </div>
    );
  }
  return <div className="row">{friendItems}</div>;
};

export default fetchProfiles(FriendsFeed);
