import React, { Component } from "react";
import Profiles from "../profiles/Profiles";
import { connect } from "react-redux";
import { getProfiles } from "../../actions/profileActions";
import Loading from "../common/Loading";
import Navbar from "../layout/Navbar";
import styled from "styled-components";
import Posts from "../posts/Posts";

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 400;
`;

class Feed extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let feedContent;
    if (profiles === null || loading) {
      feedContent = <Loading />;
    } else {
      feedContent = (
        <div className="container entry">
          <div className="row">
            <div
              style={{
                borderLeft: "whitesmoke solid 2px",
                borderRight: "whitesmoke solid 2px"
              }}
              className="col-md-6 mt-5"
            >
              <Header className="text-center">Profiles</Header>
              <hr />
              <Profiles profiles={profiles} />
            </div>
            <div
              style={{
                borderRight: "whitesmoke solid 2px"
              }}
              className="col-md-6 mt-5"
            >
              <Header className="text-center">Posts</Header>
              <hr />
              <Posts />
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <Navbar />

        {feedContent}
      </>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Feed);
