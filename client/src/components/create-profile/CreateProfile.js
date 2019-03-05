import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
// import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { createProfile } from "../../actions/profileActions";
import UploadFileGroup from "../common/UploadFileGroup";
import Navbar from "../layout/Navbar";

export class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      location: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      selectedFile: null,
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const profileData = new FormData();

    if (this.state.selectedFile) {
      profileData.append(
        "myImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    }

    profileData.append("handle", this.state.handle);
    profileData.append("location", this.state.location);
    profileData.append("bio", this.state.bio);
    profileData.append("twitter", this.state.twitter);
    profileData.append("facebook", this.state.facebook);
    profileData.append("linkedin", this.state.linkedin);
    profileData.append("youtube", this.state.youtube);
    profileData.append("instagram", this.state.instagram);

    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            id="twitter"
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            id="facebook"
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            id="linkedin"
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab fa-linkedin"
            value={this.state.linkedin}
            onChange={this.onChange}
            error={errors.linkedin}
          />

          <InputGroup
            id="youtube"
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            id="instagram"
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    return (
      <>
        <Navbar />
        <div className="entry container mt-5">
          <div className="row">
            <div
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                padding: "2rem"
              }}
              className="col-md-8 m-auto"
            >
              <h1 style={{ fontSize: "1.7rem" }} className="text-center mb-4">
                Create Your Profile
              </h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <UploadFileGroup
                      error={errors.file}
                      icon="fas fa-file-upload fa-8x"
                      type="file"
                      name="file"
                      onChange={this.fileSelectedHandler}
                      info="Profile Image"
                    />
                  </div>
                  <div className="col-md-6 mt-5">
                    <InputGroup
                      id="handle"
                      placeholder="* Username"
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="Your username"
                    />
                    <InputGroup
                      id="location"
                      placeholder="Location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}
                      info="Your Location"
                    />
                  </div>
                </div>
                <TextAreaFieldGroup
                  id="bio"
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Your description"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-outline-primary"
                  >
                    Add Social Media Links
                  </button>
                  <small className="text-muted d-block">(Optional)</small>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-outline-primary float-right mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
