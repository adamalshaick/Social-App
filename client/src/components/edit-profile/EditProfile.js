import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile } from "../../actions/profileActions";
import Navbar from "../layout/Navbar";
import SocialMedia from "../create-profile/SocialMedia";
import ProfileInfo from "../create-profile/ProfileInfo";
import handleInputErrors from "../common/hoc/handleInputErrors";

export class EditProfile extends Component {
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
      selectedFile: null
    };
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      location: this.state.location,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };
    this.props.createProfile(profileData, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, displaySocialInputs } = this.props;
    return (
      <div className="entry">
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                padding: "2rem"
              }}
              className="col-md-8 m-auto"
            >
              <h1 style={{ fontSize: "1.7rem" }} className="text-center mb-4">
                Edit Your Profile
              </h1>

              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <ProfileInfo
                  errors={errors}
                  onChange={this.onChange}
                  handle={this.state.handle}
                  location={this.state.location}
                  bio={this.state.bio}
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
                this.state.displaySocialInputs ? (
                <SocialMedia
                  twitter={this.state.twitter}
                  facebook={this.state.facebook}
                  linkedin={this.state.linkedin}
                  youtube={this.state.youtube}
                  instagram={this.state.instagram}
                  onChange={this.onChange}
                  errors={errors}
                />
                ) : null}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-outline-primary float-right mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default connect(
  null,
  { createProfile }
)(handleInputErrors(EditProfile));
