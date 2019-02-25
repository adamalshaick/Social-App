import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProfileByHandle } from "../../actions/profileActions";
import Loading from "../common/Loading";
import ProfileContent from "./ProfileContent";
import Navbar from "../layout/Navbar";
import styled, { keyframes } from "styled-components";

const entry = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ProfilePage = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2rem;
  animation: ${entry} 0.75s;
`;

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    const { user } = this.props.auth;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Loading />;
    } else {
      profileContent = (
        <div className="container mt-5">
          <ProfilePage>
            <ProfileContent profile={profile} user={user} nested={true} />
          </ProfilePage>
        </div>
      );
    }
    return (
      <>
        <Navbar />
        {profileContent}
      </>
    );
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
