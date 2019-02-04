const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Profile model
const Profile = require("../../models/Profile");

// @route GET api/friends
// @desc Get friends
// @access Private
router.get("/", (req, res) => {
  Profile.findOne({ user: req.user.id })
    .then(friends => res.json(friends))
    .catch(err => res.status(404).json({ nofriendsfound: "No friends found" }));
});

// @route POST api/friends
// @desc Add friend
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        profile.friends.unshift(req.body.id);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(400).json(err));
  }
);

module.exports = router;
