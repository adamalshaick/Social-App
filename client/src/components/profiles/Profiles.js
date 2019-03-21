import React from "react";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";
import fetchProfiles from "../common/hoc/fetchProfiles";

const Profiles = ({ currentProfile, profiles }) => {
  let profileArray;
  // Check to see if there are profiles
  if (profiles.length > 0) {
    // Get profiles without current user
    profileArray = profiles.reduce((profileItems, profile) => {
      if (profile.user._id !== currentProfile.user._id) {
        profileItems.push(
          <ProfileItem
            key={profile._id}
            currentProfile={currentProfile}
            profile={profile}
          />
        );
      }
      return profileItems;
    }, []);
  } else {
    profileArray = <div>No Profiles found</div>;
  }
  return <div className="row entry">{profileArray}</div>;
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  profiles: PropTypes.array.isRequired
};

export default fetchProfiles(Profiles);
