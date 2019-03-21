import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostFeed = ({ posts, currentProfile }) => {
  const postFeed = posts.map(post => (
    <PostItem key={post._id} post={post} currentProfile={currentProfile} />
  ));
  return <div className="col-12">{postFeed}</div>;
};

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired
};

export default PostFeed;
