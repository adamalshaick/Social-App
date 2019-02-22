const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Post = require("../../models/Post");
// Profile model
const Profile = require("../../models/Profile");

// Controllers
const postsController = require("../../controllers/postsController");

// Validation
const validatePostInput = require("../../validation/post");

// @route GET api/posts
// @desc Get post
// @access Public
router.get("/", (req, res) => {
  postsController.getPosts(req, res);
});

// @route GET api/posts/:id
// @desc Get post by id
// @access Public
router.get("/:id", (req, res) => {
  postsController.getPost(req, res);
});

// @route POST api/posts
// @desc Create post
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    postsController.createPost(req, res);
  }
);

// @route DELETE api/posts/:id
// @desc Delete post
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    postsController.deletePost(req, res);
  }
);

// @route POST api/posts/like/:id
// @desc Like post
// @access Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    postsController.likePost(req, res);
  }
);

// @route POST api/posts/unlike/:id
// @desc Unlike post
// @access Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    postsController.unlikePost(req, res);
  }
);

// @route POST api/posts/comment/:id
// @desc Add comment to post
// @access Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    postsController.commentPost(req, res);
  }
);

// @route DELETE api/posts/comment/:id/:comment_id
// @desc Delete comment
// @access Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    postsController.deleteComment(req, res);
  }
);
module.exports = router;
