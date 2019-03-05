import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

class PostFeed extends Component {
  render() {
    const { posts, profiles, profile } = this.props;
    const postFeed = posts.map(post => (
      <PostItem key={post._id} post={post} profile={profile} />
    ));
    return <div className="col-12">{postFeed}</div>;
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;
