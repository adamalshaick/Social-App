import React from "react";
import { CreateProfile } from "../../../components/create-profile/CreateProfile";
import { shallow } from "enzyme";
import ProfileInfo from "../../../components/create-profile/ProfileInfo";
import SocialMedia from "../../../components/create-profile/SocialMedia";
import toJson from "enzyme-to-json";

const mockCreateProfilefn = jest.fn();
const mockGetCurrentProfilefn = jest.fn();
const Props = {
  profile: {},
  errors: {}
};

const wrapper = shallow(
  <CreateProfile
    {...Props}
    getCurrentProfile={mockGetCurrentProfilefn}
    createProfile={mockCreateProfilefn}
  />
);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("component did mount", () => {
  it("calls get profile fn", () => {
    expect(mockGetCurrentProfilefn.mock.calls.length).toEqual(1);
  });
});

describe("create profile action without displaying social inputs", () => {
  const profileData = new FormData();
  profileData.append("handle", "handle value");
  profileData.append("location", "location value");
  profileData.append("bio", "bio value");
  profileData.append("twitter", "");
  profileData.append("facebook", "");
  profileData.append("linkedin", "");
  profileData.append("youtube", "");
  profileData.append("instagram", "");

  it("doesn't display social inputs", () => {
    expect(wrapper.find(SocialMedia).length).toEqual(0);
  });

  it("calls function with correct data", () => {
    wrapper
      .find(ProfileInfo)
      .dive()
      .find("#handle")
      .simulate("change", {
        target: { name: "handle", value: "handle value" }
      });
    wrapper
      .find(ProfileInfo)
      .dive()
      .find("#location")
      .simulate("change", {
        target: { name: "location", value: "location value" }
      });
    wrapper
      .find(ProfileInfo)
      .dive()
      .find("#bio")
      .simulate("change", { target: { name: "bio", value: "bio value" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockCreateProfilefn.mock.calls[0][0]).toEqual(profileData);
  });
});

describe("create profile action with social inputs", () => {
  const profileSocialData = new FormData();
  profileSocialData.append("handle", "handle value");
  profileSocialData.append("location", "location value");
  profileSocialData.append("bio", "bio value");
  profileSocialData.append("twitter", "twitter");
  profileSocialData.append("facebook", "facebook");
  profileSocialData.append("linkedin", "linkedin");
  profileSocialData.append("youtube", "youtube");
  profileSocialData.append("instagram", "instagram");

  it("displays social inputs", () => {
    wrapper.find("#toggleSocials").simulate("click");
    expect(wrapper.find(SocialMedia).length).toEqual(1);
  });

  it("calls create profile fn with correct data", () => {
    wrapper
      .find(SocialMedia)
      .dive()
      .find("#facebook")
      .simulate("change", {
        target: { name: "facebook", value: "facebook" }
      });
    wrapper
      .find(SocialMedia)
      .dive()
      .find("#instagram")
      .simulate("change", {
        target: { name: "instagram", value: "instagram" }
      });
    wrapper
      .find(SocialMedia)
      .dive()
      .find("#youtube")
      .simulate("change", {
        target: { name: "youtube", value: "youtube" }
      });
    wrapper
      .find(SocialMedia)
      .dive()
      .find("#twitter")
      .simulate("change", {
        target: { name: "twitter", value: "twitter" }
      });
    wrapper
      .find(SocialMedia)
      .dive()
      .find("#linkedin")
      .simulate("change", {
        target: { name: "linkedin", value: "linkedin" }
      });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockCreateProfilefn.mock.calls[1][0]).toEqual(profileSocialData);
  });
});
