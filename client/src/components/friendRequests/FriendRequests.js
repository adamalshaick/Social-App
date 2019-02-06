import React, { Component } from "react";
import RequestItem from "./RequestItem";

class FriendRequests extends Component {
  render() {
    const { profiles, profile } = this.props;
    let requests = [];
    profile.friendRequests.forEach(request => {
      profiles.forEach(profileItem => {
        if (request === profileItem.user._id) {
          requests.push(profileItem);
        }
      });
    });

    return requests.map(request => (
      <RequestItem key={request._id} request={request} />
    ));
  }
}

export default FriendRequests;
