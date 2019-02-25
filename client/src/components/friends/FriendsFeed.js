import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileItem from "../profiles/ProfileItem";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profileActions";

class FriendsFeed extends Component {
  render() {
    const { profile, profiles } = this.props;
    let friendItems;

    if (profile.friends && profile.friends.length) {
      friendItems = profiles.reduce((friendItems, profileItem) => {
        if (
          profileItem.user._id ===
          profile.friends.find(friend => {
            return friend;
          })
        ) {
          friendItems.push(
            <ProfileItem key={profileItem._id} profile={profileItem} />
          );
        }
        console.log(friendItems);
        return friendItems;
      }, []);
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

    return <div>{friendItems}</div>;
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles
});

export default connect(
  null,
  { getProfiles }
)(FriendsFeed);
