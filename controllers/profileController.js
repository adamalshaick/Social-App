const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");
const path = require("path");

// Load Validation
const validateProfileInput = require("../validation/profile");

// Load Profile Model
const Profile = require("../models/Profile");
// Load User Profile
const User = require("../models/User");

// Services
const profileService = require("../services/profileService");
const uploadService = require("../services/uploadService");

module.exports = {
  createProfile: (req, res) => {
    uploadService.upload(req, res, error => {
      const { errors, isValid } = validateProfileInput(
        req.body,
        req.file,
        error
      );

      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }
      const profileFields = profileService.getFields(
        req.user.id,
        req.body,
        req.file.filename
      );

      Profile.findOne({ user: req.user.id }).then(profile => {
        if (profile) {
          //Update
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then(profile => res.json(profile));
        } else {
          // Create

          // Check if handle exists
          Profile.findOne({ handle: profileFields.handle }).then(profile => {
            if (profile) {
              errors.handle = "That handle already exists";
              res.status(400).json(errors);
            }

            // Save Profile
            new Profile(profileFields)
              .save()
              .then(profile => res.json(profile));
          });
        }
      });
    });
  },

  deleteProfile: (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  },

  getProfileById: (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.params.user_id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          res.status(404).json(errors);
        }

        res.json(profile);
      })
      .catch(err =>
        res.status(404).json({ profile: "There is no profile for this user" })
      );
  },

  getCurrentProfile: (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  },

  getProfiles: (req, res) => {
    const errors = {};
    Profile.find()
      .populate("user", ["name", "avatar"])
      .then(profiles => {
        if (!profiles) {
          errors.noprofile = "There are no profiles";
          return res.status(404).json(errors);
        }
        res.json(profiles);
      })
      .catch(err => res.status(404).json({ profile: "There are no profiles" }));
  },

  getProfileByHandle: (req, res) => {
    Profile.findOne({ handle: req.params.handle })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          res.status(404).json(errors);
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
};
