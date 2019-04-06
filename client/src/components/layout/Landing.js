import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  Background,
  Strip,
  Marker,
  LandingImage,
  ImageCover,
  LandingText,
  TextCover
} from "../common/styles/Layout";

class Landing extends Component {
  render() {
    return (
      <>
        <div className="container-fluid entry">
          <Navbar landing />
          <Background className="row">
            <Strip className="col-3" />
            <Strip className="col-3" />
            <Strip className="col-3" />
            <div className="col-3" />
          </Background>
          <div className="row text-center">
            <Marker>
              <p>
                Full-Stack React + Node.js <br />
                Social Application
              </p>
              <Link to="/register" className="btn btn-outline-dark">
                Get Started
              </Link>
            </Marker>

            <LandingImage src="./assets/images/rsz_social-landing.jpg" />
            <ImageCover />
            <LandingText src="./assets/images/SocialText.svg" />
            <TextCover />
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
