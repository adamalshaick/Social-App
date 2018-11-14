import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      location: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }

  onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  onSubmit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab-fa-twitter"
            value={this.state.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Youtube Channel URL"
            name="youtube"
            icon="fab-fa-youtube"
            value={this.state.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Facebook Profile URL"
            name="facebook"
            icon="fab-fa-facebook"
            value={this.state.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="Instagram Profile URL"
            name="instagram"
            icon="fab-fa-instagram"
            value={this.state.onChange}
            error={errors.instagram}
          />
          <InputGroup
            placeholder="Linkedin Profile URL"
            name="linkedin"
            icon="fab-fa-linkedin"
            value={this.state.onChange}
            error={errors.linkedin}
          />
        </div>
      );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Add some information about You!
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.state.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name, nickname"
                />

                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="Your location"
                />

                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Your description"
                />

                <div className="mb-3">
                  <button
                    onClick={() => {
                      this.setState(prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs
                      }));
                    }}
                    className="btn btn-info"
                  >
                    Add Social Media Links
                  </button>
                  <span className="text-muted">(Optional)</span>
                </div>
                {socialInputs}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(CreateProfile);
