import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import CommentForm from "../comments/CommentForm";
import CommentFeed from "../comments/CommentFeed";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = { displayComments: false };
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

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, profile } = this.props;

    return (
      <div className="row">
        <div className="row mt-3">
          <Link to="">
            <img
              style={{ width: "40px" }}
              className="rounded-circle  ml-4"
              src="../uploads/post_image/placeholder.png"
              alt=""
            />
          </Link>
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
                    displayComments: !prevState.displayComments
                  }));
                }}
                className="btn btn-outline-primary btn-sm float-right"
              >
                Comments
              </button>

              {post.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, post._id)}
                  type="button"
                  className="btn btn-outline-danger btn-sm mr-1 float-right"
                >
                  Delete
                </button>
              ) : null}

              {post.likes.find(like => like.user === auth.user.id) ? (
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
            {this.state.displayComments ? (
              <div className="col-12">
                <CommentFeed postId={post._id} comments={post.comments} />
                <CommentForm postId={post._id} profile={profile} />
              </div>
            ) : null}
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
