import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileItem from "../profiles/ProfileItem";

class FriendsFeed extends Component {
  render() {
    const { profile, profiles } = this.props;
    let friendItems;

    if (profile.friends && profile.friends.length) {
      const friends = profiles.filter(friend =>
        profile.friends.includes(friend.user._id)
      );
      friendItems = friends.map(friend => (
        <ProfileItem key={friend._id} profile={friend} />
      ));
    } else {
      friendItems = (
        <div className="text-center">
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
  }
}

export default FriendsFeed;
