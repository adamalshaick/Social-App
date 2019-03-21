import React from "react";
import PropTypes from "prop-types";
import ProfileContent from "../profile/ProfileContent";
import FriendsFeed from "../friends/FriendsFeed";
import FriendRequests from "../friendRequests/FriendRequests";
import { Header } from "../common/styles/Header";
import fetchProfile from "../common/hoc/fetchProfile";

const Dashboard = ({ auth, profile }) => {
  return (
    <article className="container entry">
      {/* return friend requests if there are any */}
      {profile.currentProfile.friendRequests &&
      profile.currentProfile.friendRequests.length ? (
        <FriendRequests profile={profile.currentProfile} />
      ) : null}
      <div className="row mt-5">
        <section
          style={{ borderRight: "whitesmoke solid 2px" }}
          className="col-md-6"
        >
          <ProfileContent profile={profile.currentProfile} user={auth.user} />
        </section>
        <section className="col-md-6">
          <Header className="text-center">Your Friends</Header>
          <hr />
          <FriendsFeed currentProfile={profile.currentProfile} />
        </section>
      </div>
    </article>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default fetchProfile(Dashboard);
