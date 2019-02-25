import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  acceptRequest,
  declineRequest,
  getProfiles
} from "../../actions/profileActions";

import { Redirect } from "react-router-dom";
import styled from "styled-components";
import ProfileContent from "../profile/ProfileContent";
import Loading from "../common/Loading";
import FriendsFeed from "../friends/FriendsFeed";
import FriendRequests from "../friendRequests/FriendRequests";

import Navbar from "../layout/Navbar";

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 400;
`;

const Requests = styled.div``;

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getProfiles();
  }

  onAccept(id) {
    this.props.onAccept(id);
  }

  onDecline(id) {
    this.props.onDecline(id);
  }

  render() {
    const { profile, profiles, loading } = this.props.profile;
    const { user } = this.props.auth;

    let dashboardContent;

    if (profile === null || profiles === null || loading) {
      dashboardContent = <Loading />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <>
            <div className="container entry">
              {profile.friendRequests && profile.friendRequests.length ? (
                <Requests>
                  <FriendRequests profile={profile} profiles={profiles} />
                </Requests>
              ) : null}

              <div className="row mt-5">
                <section
                  style={{
                    borderRight: "whitesmoke solid 2px"
                  }}
                  className="col-md-6"
                >
                  <ProfileContent profile={profile} user={user} />
                </section>
                <section className="col-md-6">
                  <Header className="text-center">Your Friends</Header>
                  <hr />

                  <FriendsFeed profile={profile} profiles={profiles} />
                </section>
              </div>
            </div>
          </>
        );
      } else {
        // User is logged in but has no profile
        return <Redirect to="/create-profile" />;
      }
    }
    return (
      <>
        <Navbar />
        {dashboardContent}
      </>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getProfiles: PropTypes.func.isRequired,
  acceptRequest: PropTypes.func.isRequired,
  declineRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  profiles: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getProfiles, acceptRequest, declineRequest }
)(Dashboard);
