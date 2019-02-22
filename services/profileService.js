const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateProfileInput = require("../validation/profile");

// Load Profile Model
const Profile = require("../models/Profile");
// Load User Profile
const User = require("../models/User");

module.exports = {
  getFields: (user, data, file) => {
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
  }
};
