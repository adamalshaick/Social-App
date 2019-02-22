const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Profile model
const Profile = require("../../models/Profile");

const friendsController = require("../../controllers/friendsController");

// @route POST api/friends/request/:id
// @desc Create friend request
// @access Private
router.post(
  "/request/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    friendsController.createRequest(req, res);
  }
);

// @route POST api/friends/request/accept/:id
// @desc Accept friend request
// @access Private
router.post(
  "/request/accept/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    friendsController.acceptRequest(req, res);
  }
);

// @route POST api/friends/request/decline/:id
// @desc Decline friend request
// @access Private
router.post(
  "/request/decline/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    friendsController.declineRequest(req, res);
  }
);

module.exports = router;
