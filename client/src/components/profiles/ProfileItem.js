import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import { sendFriendRequest } from "../../actions/profileActions";
import { connect } from "react-redux";
import styled from "styled-components";

const Card = styled.div`
  &:hover {
    filter: brightness(80%);
  }
  transition: filter 0.5s;
`;

class ProfileItem extends Component {
  onRequest(id) {
    this.props.sendFriendRequest(id);
  }

  render() {
    const { profile, auth } = this.props;
    return (
      <div className="col-12 col-xl-6">
        <Card className="text-center p-1">
          <Link to={`/profile/${profile.handle}`}>
            <div>
              {profile.friends.find(friend => friend === auth.user.id) ? (
                <i
                  style={{ color: "lightgreen" }}
                  className="far fa-check-circle mr-2"
                />
              ) : null}

              {profile.handle}
            </div>

            <img
              style={{ height: "200px", width: "200px" }}
              src={`../uploads/post_image/${profile.profileImage}`}
            />
          </Link>
        </Card>
        {profile.friends.find(
          friend => friend === auth.user.id
        ) ? null : profile.friendRequests.find(
            request => request === auth.user.id
          ) ? null : (
          <div className="text-center">
            <button
              className="btn btn-outline-primary btn-sm mt-3"
              onClick={this.onRequest.bind(this, profile.user._id)}
            >
              Send friend request
              <i className="fas fa-arrow-circle-right ml-2" />
            </button>
          </div>
        )}
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  sendFriendRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { sendFriendRequest }
)(ProfileItem);
