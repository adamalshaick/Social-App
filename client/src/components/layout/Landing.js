import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class Landing extends Component {
  render() {
    return (
      <>
        <div className="container-fluid entry">
          <Navbar landing />
          <div
            style={{
              height: "100vh",
              width: "100vw",
              position: "absolute",
              top: "0",
              zIndex: "-1"
            }}
            className="row"
          >
            <div
              style={{ borderRight: "lightgrey solid 1px" }}
              className="col-3"
            />
            <div
              style={{ borderRight: "lightgrey solid 1px" }}
              className="col-3"
            />
            <div
              style={{ borderRight: "lightgrey solid 1px" }}
              className="col-3"
            />
            <div className="col-3" />
          </div>
          <div className="row">
            <img
              className="landing-image"
              style={{
                width: "550px",
                height: "367px",
                position: "absolute",
                left: "44%",
                top: "31%"
              }}
              src="./assets/images/rsz_social-landing.jpg"
            />
            <div
              className="image-cover"
              style={{
                height: "367px",
                left: "44%",
                top: "31%",

                backgroundColor: "#353835"
              }}
            />
            <img
              className="landing-text"
              style={{
                position: "absolute",
                left: "68%",
                top: "57%",
                width: "300px"
              }}
              src="./assets/images/SocialText.svg"
            />
            <div
              className="text-cover"
              style={{
                position: "absolute",
                left: "68%",
                top: "57%",
                height: "70px",
                backgroundColor: "whitesmoke"
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
