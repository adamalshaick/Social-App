import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";
import Link from "react-router-dom/Link";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className=" mb-3">
        <div className="row mt-3">
          <Link to="">
            <img
              style={{ width: "40px" }}
              className="rounded-circle  ml-4"
              src={`../uploads/post_image/${profile.profileImage}`}
              alt=""
            />
          </Link>

          <div className="text-center mt-2 ml-2">{comment.name}</div>

          <div className="col-12">
            <div style={{ fontSize: "0.9rem" }} className="float-left ml-2">
              {comment.text}
            </div>
          </div>

          {comment.user === auth.user.id ? (
            <button
              onClick={this.onDeleteClick.bind(this, postId, comment._id)}
              type="button"
              className="btn btn-outline-danger btn-sm  mr-1"
            >
              Delete
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
