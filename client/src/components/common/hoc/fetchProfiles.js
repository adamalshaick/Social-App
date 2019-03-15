import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfiles } from "../../../actions/profileActions";
import PropTypes from "prop-types";
import SecondaryLoading from "../SecondaryLoading";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getProfiles();
    }
    render() {
      const { profiles } = this.props;
      // Wait for profiles data
      if (!profiles) {
        return <SecondaryLoading />;
      } else {
        return <ChildComponent {...this.props} />;
      }
    }
  }

  ChildComponent.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profiles: PropTypes.array.isRequired
  };

  const mapStateToProps = state => ({
    profiles: state.profile.profiles
  });

  return connect(
    mapStateToProps,
    { getProfiles }
  )(ComposedComponent);
};
