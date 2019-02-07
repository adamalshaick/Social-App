import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
import Loading from "../common/Loading";
import Header from "../common/Header";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props.profile;
    const { auth } = this.props;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Loading />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.reduce((profileItems, profile) => {
          if (profile.user._id !== auth.user.id) {
            profileItems.push(
              <ProfileItem key={profile._id} profile={profile} />
            );
          }
          return profileItems;
        }, []);
      } else {
        profileItems = <div>No profiles found</div>;
      }
    }

    return (
      <>
        <Header text={"Profiles"} />
        <div className="mt-5">{profileItems}</div>
      </>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
