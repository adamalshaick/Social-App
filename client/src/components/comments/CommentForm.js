import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addComment } from "../../actions/postActions";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { postId, currentProfile } = this.props;

    const newComment = {
      text: this.state.text,
      name: currentProfile.user.name,
      avatar: currentProfile.profileImage
    };

    this.props.addComment(postId, newComment);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="col-12 entry">
        <form onSubmit={this.onSubmit}>
          <TextAreaFieldGroup
            id="commentInput"
            className="form-control"
            placeholder="Make a comment..."
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            style={{ fontSize: "12px", width: "100%" }}
          />

          <div className="float-right">
            <button type="submit" className="btn btn-outline-primary btn-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  currentProfile: PropTypes.object.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
