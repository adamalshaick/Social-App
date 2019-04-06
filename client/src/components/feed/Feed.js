import React from "react";
import Profiles from "../profiles/Profiles";
import { Header } from "../common/styles/Header";
import Posts from "../posts/Posts";
import fetchProfile from "../common/hoc/fetchProfile";
import PropTypes from "prop-types";

export const Feed = ({ profile }) => {
  return (
    <div className="container entry">
      <div className="row">
        <div
          style={{
            borderLeft: "whitesmoke solid 2px",
            borderRight: "whitesmoke solid 2px"
          }}
          className="col-md-6 mt-5"
        >
          <Header className="text-center">Profiles</Header>
          <hr />
          <Profiles currentProfile={profile.currentProfile} />
        </div>
        <div
          style={{ borderRight: "whitesmoke solid 2px" }}
          className="col-md-6 mt-5"
        >
          <Header className="text-center">Posts</Header>
          <hr />
          <Posts currentProfile={profile.currentProfile} />
        </div>
      </div>
    </div>
  );
};

Feed.propTypes = {
  profile: PropTypes.object.isRequired
};

export default fetchProfile(Feed);
