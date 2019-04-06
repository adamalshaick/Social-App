import React, { Component } from "react";
import PropTypes from "prop-types";
import { acceptRequest, declineRequest } from "../../actions/profileActions";
import { connect } from "react-redux";
import { Request } from "../common/styles/Request";
import { Link } from "react-router-dom";

export class RequestItem extends Component {
  onAccept(id) {
    this.props.acceptRequest(id);
  }

  onDecline(id) {
    this.props.declineRequest(id);
  }
  render() {
    const { request, profiles } = this.props;
    //
    const requestProfile = profiles.filter(
      profile => profile.user._id === request
    );
    //
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
            onClick={this.onAccept.bind(this, request)}
            className="btn btn-outline-success"
          >
            Accept
          </button>
          <button
            onClick={this.onDecline.bind(this, request)}
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

export default connect(
  null,
  { acceptRequest, declineRequest }
)(RequestItem);
