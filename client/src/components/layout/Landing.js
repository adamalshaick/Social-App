import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing-page">
        <div className="landing-image" />
        <div className="container">
          <div className=" text-center">
            <h1 className="display-1  d-inline mt-5 ">
              <strong>Social Application</strong>
            </h1>

            <div className="row mt-5">
              <div
                style={{ background: "white" }}
                className="col-md-5 mb-4 p-0 m-0 image-wrapper"
              >
                <Link to="/login" className="link">
                  <img
                    style={{
                      maxWidth: "100%",
                      borderBottom: "black solid 1px",
                      borderRadius: "5px",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px"
                    }}
                    src="./assets/images/posts.jpg"
                  />
                  <span style={{ fontSize: "25px", color: "black" }}>
                    Login
                  </span>
                </Link>
              </div>
              <div className="col-md-2" />
              <div
                style={{ background: "white" }}
                className="col-md-5 mb-4 p-0 m-0 image-wrapper"
              >
                <Link to="/register" className="link">
                  <img
                    src="./assets/images/chat.jpg"
                    style={{
                      maxWidth: "100%",
                      borderBottom: "black solid 1px",
                      borderRadius: "5px",
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px"
                    }}
                  />
                  <span style={{ fontSize: "25px", color: "black" }}>
                    Sign up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
