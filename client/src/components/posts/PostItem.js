import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import CommentForm from "../comments/CommentForm";
import CommentFeed from "../comments/CommentFeed";

export class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = { displayCommentForm: false };
  }
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  render() {
    const { post, currentProfile } = this.props;

    return (
      <div className="row">
        <div className="row mt-3">
          <img
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle  ml-4"
            src={post.avatar}
            alt=""
          />
          <div className="mt-1 ml-2">{post.name}</div>
        </div>
        <div className="col-12">
          <div style={{ fontSize: "0.9rem" }} className="float-left ml-2">
            {post.text}
          </div>
        </div>

        <div className="mt-2 ml-3 col-12">
          <div className="row">
            <div className="col-12">
              <button
                type="button"
                onClick={() => {
                  this.setState(prevState => ({
                    displayCommentForm: !prevState.displayCommentForm
                  }));
                }}
                className="btn btn-outline-primary btn-sm float-right"
              >
                Add a comment
              </button>

              {post.user === currentProfile.user._id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-outline-danger btn-sm mr-1 float-right"
                >
                  Delete
                </button>
              ) : null}

              {post.likes.find(
                like => like.user === currentProfile.user._id
              ) ? (
                <button
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="btn  btn-outline-danger btn-sm mr-1 float-right"
                >
                  <i className="fas fa-thumbs-down" />
                </button>
              ) : null}

              <button
                onClick={this.onLikeClick.bind(this, post._id)}
                type="button"
                className="btn btn-outline-success btn-sm mr-1 float-right"
              >
                <i className="fas fa-thumbs-up mr-2" />
                <small>{post.likes.length}</small>
              </button>
            </div>
          </div>
          <div className="mt-2 ml-lg-4 row">
            <div className="col-12">
              <CommentFeed postId={post._id} comments={post.comments} />
              {this.state.displayCommentForm ? (
                <CommentForm
                  postId={post._id}
                  currentProfile={currentProfile}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
