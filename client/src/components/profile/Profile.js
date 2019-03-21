import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfileByHandle } from "../../actions/profileActions";
import Loading from "../common/Loading";
import ProfileContent from "./ProfileContent";
import Navbar from "../layout/Navbar";
import { ShadowCard } from "../common/styles/ShadowCard";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile } = this.props.profile;
    const { user } = this.props.auth;
    let profileContent;

    if (!profile) {
      profileContent = <Loading />;
    } else {
      profileContent = (
        <div className="container mt-5 entry">
          <ShadowCard>
            <ProfileContent profile={profile} user={user} />
          </ShadowCard>
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
