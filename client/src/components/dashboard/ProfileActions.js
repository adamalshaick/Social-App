import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div
      style={{ position: "absolute", top: "0", left: "20px" }}
      className="btn-group mb-4"
      role="group"
    >
      <Link to="/edit-profile" className="btn btn-dark mt-3">
        <i className="fas fa-user-circle text-light mr-1" /> Edit Profile
      </Link>
    </div>
  );
};

export default ProfileActions;
