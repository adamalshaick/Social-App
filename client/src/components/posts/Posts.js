import React from "react";
import PropTypes from "prop-types";
import PostForm from "./PostForm.js";
import PostFeed from "./PostFeed";
import fetchPosts from "../common/hoc/fetchPosts.js";

const Posts = ({ post, currentProfile }) => {
  return (
    <div className="entry">
      <PostForm currentProfile={currentProfile} />
      <div className="mt-5">
        <PostFeed posts={post.posts} currentProfile={currentProfile} />
      </div>
    </div>
  );
};

Posts.propTypes = {
  post: PropTypes.object.isRequired
};

export default fetchPosts(Posts);
