import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";
import handleInputErrors from "../common/hoc/handleInputErrors";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  onSubmit = e => {
    e.preventDefault();
    const { currentProfile } = this.props;
    const newPost = {
      text: this.state.text,
      name: currentProfile.user.name,
      avatar: currentProfile.profileImage
    };
    this.props.addPost(newPost);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.props;
    return (
      <div className="mb-3">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextAreaFieldGroup
              className="form-control form-control-lg"
              placeholder="Add a post"
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary btn-sm float-right"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  currentProfile: PropTypes.object.isRequired
};

export default connect(
  null,
  { addPost }
)(handleInputErrors(PostForm));
