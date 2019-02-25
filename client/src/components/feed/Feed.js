import React, { Component } from "react";
import Profiles from "../profiles/Profiles";
import { connect } from "react-redux";
import { getProfiles, getCurrentProfile } from "../../actions/profileActions";
import Loading from "../common/Loading";
import Navbar from "../layout/Navbar";
import styled from "styled-components";
import Posts from "../posts/Posts";
import { Redirect } from "react-router-dom";

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 400;
`;

class Feed extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getProfiles();
  }

  render() {
    const { profile, profiles, loading } = this.props.profile;
    let feedContent;
    if (profiles === null || profile === null || loading) {
      feedContent = <Loading />;
    } else {
      if (Object.keys(profile).length > 0) {
        feedContent = (
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
                <Profiles profiles={profiles} />
              </div>
              <div
                style={{
                  borderRight: "whitesmoke solid 2px"
                }}
                className="col-md-6 mt-5"
              >
                <Header className="text-center">Posts</Header>
                <hr />
                <Posts />
              </div>
            </div>
          </div>
        );
      } else {
        return <Redirect to="/create-profile" />;
      }
    }

    return (
      <>
        <Navbar />
        {feedContent}
      </>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles, getCurrentProfile }
)(Feed);
