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

// @route POST api/friends/request/:id
// @desc Create friend request
// @access Private
router.post(
  "/request/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.params.id })
      .then(profile => {
        const friendContent = {
          user: req.user.id, //?
          avatar: req.body.avatar,
          handle: req.body.handle
        };
        profile.friendRequests.unshift(friendContent);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(400).json(err));
  }
);

// @route POST api/friends/request/accept/:id
// @desc Accept friend request
// @access Private
router.post(
  "/request/accept/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Promise.all([
      Profile.findOne({ user: req.params.id }),
      Profile.findOne({ user: req.user.id })
    ])
      .then(results => {
        const firstProfile = results[0];
        const secondProfile = results[1];
        const request = {
          user: req.params.id,
          avatar: req.body.avatar,
          handle: req.body.handle
        };

        const accept = {
          user: req.user.id,
          avatar: req.body.avatarInput,
          handle: req.body.handleInput
        };

        firstProfile.friends.unshift(accept);
        secondProfile.friends.unshift(request);

        // Get remove index
        const removeIndex = secondProfile.friendRequests
          .map(request => request.user.toString())
          .indexOf(req.params.id);

        //Splice request out of array
        secondProfile.friendRequests.splice(removeIndex, 1);
        firstProfile.save().then(profile => res.json(profile));
        secondProfile.save().then(profile => res.json(profile));
      })
      .catch(err => {
        res.json(err);
      });
  }
);

// @route POST api/friends/request/decline/:id
// @desc Decline friend request
// @access Private
router.post(
  "/request/decline/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.friendRequests
          .map(request => request.user.toString())
          .indexOf(req.params.id);

        //Splice request out of array
        profile.friendRequests.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(400).json(err));
  }
);

// @route DELETE api/friends
// @desc Remove friend
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Check to see if id is in friends array
        if (
          profile.friends.filter(
            friend => friend._id.toString() === req.params.id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ friendnotexists: "Friend doesn't exist" });
        }
        // Get remove index
        const removeIndex = profile.cart.items
          .map(item => item._id.toString())
          .indexOf(req.params.id);

        //Splice comment out of array
        profile.cart.items.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(400).json(err));
  }
);

module.exports = router;
