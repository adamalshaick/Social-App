import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import {
  getCurrentProfile,
  getProfiles
} from "../../../actions/profileActions";
import Navbar from "../../layout/Navbar";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getProfiles();
      this.props.getCurrentProfile();
    }
    render() {
      const { profiles, currentProfile, loading } = this.props.profile;
      // Wait for profiles data
      if (!profiles || !currentProfile || loading) {
        return (
          <>
            <Navbar />
            <Loading />
          </>
        );
      }
      // Check if logged in user has profile data
      else if (Object.keys(currentProfile).length > 0) {
        return (
          <>
            <Navbar />
            <ChildComponent {...this.props} />
          </>
        );
      } else return <Redirect to="/create-profile" />;
    }
  }

  ChildComponent.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    getProfiles: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
  };

  const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
  });

  return connect(
    mapStateToProps,
    { getCurrentProfile, getProfiles }
  )(ComposedComponent);
};
