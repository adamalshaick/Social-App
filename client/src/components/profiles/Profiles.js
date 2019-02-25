import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";
import Loading from "../common/Loading";
import Navbar from "../layout/Navbar";

class Profiles extends Component {
  render() {
    const { profiles } = this.props.profile;
    const { auth } = this.props;
    let profileItems;

    if (profiles.length > 0) {
      const usersProfile = profiles.find(profile => {
        return profile.user._id === auth.user.id;
      });
      profileItems = profiles.reduce((profileItems, profile) => {
        if (profile.user._id !== auth.user.id) {
          profileItems.push(
            <ProfileItem
              key={profile._id}
              profile={profile}
              usersProfile={usersProfile}
            />
          );
        }
        return profileItems;
      }, []);
    } else {
      profileItems = <div>No profiles found</div>;
    }

    return <div className="row">{profileItems}</div>;
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
