import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";
import { getPost } from "../../actions/postActions";
import Link from "react-router-dom/Link";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Loading from "../common/Loading";
class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading, showActions } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <Loading />;
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link
                style={{ border: "lightgrey solid 1px" }}
                to="/feed"
                className="btn btn-light mb-3 mt-2"
              >
                Back to posts
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
