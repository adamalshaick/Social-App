import React, { Component } from "react";
import PropTypes from "prop-types";
import { acceptRequest, declineRequest } from "../../actions/profileActions";
import { connect } from "react-redux";

class RequestItem extends Component {
  onAccept(id) {
    this.props.acceptRequest(id);
  }

  onDecline(id) {
    this.props.declineRequest(id);
  }
  render() {
    const { request } = this.props;
    return (
      <div>
        {request.handle}
        <button
          onClick={this.onAccept.bind(this, request._id)}
          className="btn btn-success"
        >
          Accept
        </button>
        <button
          onClick={this.onDecline.bind(this, request._id)}
          className="btn btn-danger"
        >
          Decline
        </button>
      </div>
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
