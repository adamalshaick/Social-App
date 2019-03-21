import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import Navbar from "../layout/Navbar";
import { ShadowCard } from "../common/styles/ShadowCard";
import handleInputErrors from "../common/hoc/handleInputErrors";
import SocialMedia from "./SocialMedia";
import ProfileInfo from "./ProfileInfo";
import { Header } from "../common/styles/Header";

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
      selectedFile: null
    };
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentDidUpdate() {
    // Wait for profile data
    if (this.props.profile.currentProfile != null) {
      // Redirect after profile is created
      if (Object.keys(this.props.profile.currentProfile).length > 0) {
        this.props.history.push("/dashboard");
      }
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

    this.props.createProfile(profileData);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.props;
    return (
      <>
        <Navbar />
        <section className="entry container mt-md-5">
          <div className="row">
            <ShadowCard className="col-md-8 m-auto">
              <Header className="text-center mb-4">Create Your Profile</Header>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <ProfileInfo
                  errors={errors}
                  onChange={this.onChange}
                  handle={this.state.handle}
                  location={this.state.location}
                  bio={this.state.bio}
                  fileSelectedHandler={this.fileSelectedHandler}
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
                {this.state.displaySocialInputs ? (
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
            </ShadowCard>
          </div>
        </section>
      </>
    );
  }
}

CreateProfile.propTypes = {
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(handleInputErrors(CreateProfile));
