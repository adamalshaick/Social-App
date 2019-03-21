const mongoose = require("mongoose");
const passport = require("passport");

module.exports = {
  createFields: (user, data, file) => {
    // Get fields
    const profileFields = {};
    profileFields.user = user;
    if (data.handle) profileFields.handle = data.handle;
    if (data.location) profileFields.location = data.location;
    if (data.bio) profileFields.bio = data.bio;
    if (file) profileFields.profileImage = file;

    // Social
    profileFields.social = {};
    if (data.youtube) profileFields.social.youtube = data.youtube;
    if (data.twitter) profileFields.social.twitter = data.twitter;
    if (data.facebook) profileFields.social.facebook = data.facebook;
    if (data.linkedin) profileFields.social.linkedin = data.linkedin;
    if (data.instagram) profileFields.social.instagram = data.instagram;

    return profileFields;
  },

  updateFields: (user, data, file) => {
    // Get fields
    const profileFields = {};
    profileFields.user = user;
    if (data.handle) profileFields.handle = data.handle;
    if (data.location) profileFields.location = data.location;
    if (data.bio) profileFields.bio = data.bio;
    if (
      file &&
      file !==
        "https://s3.eu-central-1.amazonaws.com/adam-al-shaick-social-app/placeholder.png"
    )
      profileFields.profileImage = file;

    // Social
    profileFields.social = {};
    if (data.youtube) profileFields.social.youtube = data.youtube;
    if (data.twitter) profileFields.social.twitter = data.twitter;
    if (data.facebook) profileFields.social.facebook = data.facebook;
    if (data.linkedin) profileFields.social.linkedin = data.linkedin;
    if (data.instagram) profileFields.social.instagram = data.instagram;

    return profileFields;
  }
};
