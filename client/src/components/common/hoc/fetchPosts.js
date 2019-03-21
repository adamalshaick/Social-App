import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../../../actions/postActions";
import Navbar from "../../layout/Navbar";
import Loading from "../Loading";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getPosts();
    }

    render() {
      const { posts } = this.props.post;
      if (!posts) {
        return (
          <>
            <Navbar />
            <Loading />;
          </>
        );
      } else {
        return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = state => ({
    post: state.post
  });

  ChildComponent.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
  };

  return connect(
    mapStateToProps,
    { getPosts }
  )(ComposedComponent);
};
