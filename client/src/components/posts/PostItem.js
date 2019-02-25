import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import CommentForm from "../comments/CommentForm";
import CommentFeed from "../comments/CommentFeed";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div className="row">
        <div className="row mt-3">
          <Link to="">
            <img
              style={{ width: "40px" }}
              className="rounded-circle  ml-4"
              src={`../uploads/post_image/placeholder.png`}
              alt=""
            />
          </Link>
          <div className="text-center mt-2 ml-2 ">{post.name}</div>
        </div>
        <div className="col-12">
          <div style={{ fontSize: "0.9rem" }} className="float-left ml-2">
            {post.text}
          </div>
        </div>
        <div className="mt-2 ml-3">
          <button
            onClick={this.onLikeClick.bind(this, post._id)}
            type="button"
            className="btn btn-outline-success btn-sm mr-1"
          >
            <i className="fas fa-thumbs-up mr-2" />
            <small>{post.likes.length}</small>
          </button>
          {post.likes.find(like => like.user === auth.user.id) ? (
            <button
              onClick={this.onUnlikeClick.bind(this, post._id)}
              type="button"
              className="btn  btn-outline-danger btn-sm mr-1"
            >
              <i className="fas fa-thumbs-down" />
            </button>
          ) : null}

          {post.user === auth.user.id ? (
            <button
              onClick={this.onDeleteClick.bind(this, post._id)}
              type="button"
              className="btn btn-outline-danger btn-sm mr-1"
            >
              Delete
            </button>
          ) : null}

          <div className="mt-2 ml-lg-4">
            <CommentFeed
              style={{ width: "100%" }}
              postId={post._id}
              comments={post.comments}
            />
            <CommentForm style={{ width: "100%" }} postId={post._id} />
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
