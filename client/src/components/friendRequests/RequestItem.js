import React, { Component } from "react";
import PropTypes from "prop-types";
import { acceptRequest, declineRequest } from "../../actions/profileActions";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Request = styled.div`
  width: 300px;
  height: 150px;
  background-color: whitesmoke;
  border-radius: 1rem;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  border: lightgrey solid 1px;
`;

export class RequestItem extends Component {
  onAccept(id) {
    this.props.acceptRequest(id);
  }

  onDecline(id) {
    this.props.declineRequest(id);
  }
  render() {
    const { request, profile, profiles } = this.props;
    const requestProfile = profiles.filter(
      profile => profile.user._id === request
    );
    return (
      <Request>
        <div className="text-center mt-4">
          <Link to={`/profile/${requestProfile[0].handle}`}>
            {requestProfile[0].handle}
          </Link>{" "}
          wants to be your friend
        </div>
        <div className="text-center mt-3">
          <button
            onClick={this.onAccept.bind(this, request._id)}
            className="btn btn-outline-success"
          >
            Accept
          </button>
          <button
            onClick={this.onDecline.bind(this, request._id)}
            className="btn btn-outline-danger ml-2"
          >
            Decline
          </button>
        </div>
      </Request>
    );
  }
}

RequestItem.propTypes = {
  request: PropTypes.object.isRequired,
  acceptRequest: PropTypes.func.isRequired,
  declineRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { acceptRequest, declineRequest }
)(RequestItem);
