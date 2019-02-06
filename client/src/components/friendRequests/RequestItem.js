import React from "react";
import PropTypes from "prop-types";

const RequestItem = ({ request, onAccept, onDecline }) => {
  return (
    <div>
      {request.handle}
      <button onClick={onAccept} className="btn btn-success">
        Accept
      </button>
      <button onClick={onDecline} className="btn btn-danger">
        Decline
      </button>
    </div>
  );
};

RequestItem.propTypes = {
  request: PropTypes.object.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired
};

export default RequestItem;
