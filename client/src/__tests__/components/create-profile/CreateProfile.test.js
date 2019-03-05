import React from "react";
import { CreateProfile } from "../../../components/create-profile/CreateProfile";
import { shallow } from "enzyme";

const mockCreateProfilefn = jest.fn();
const Props = {
  profile: {},
  errors: {}
};
let wrapper;

wrapper = shallow(
  <CreateProfile {...Props} createProfile={mockCreateProfilefn} />
);

it("displays form", () => {
  expect(wrapper.find("form").length).toEqual(1);
});

it("should call the mock create profile function", () => {
  wrapper.find("form").simulate("submit", { preventDefault() {} });
  expect(mockCreateProfilefn.mock.calls.length).toBe(1);
});

describe("create profile action", () => {
  const profileData = new FormData();
  profileData.append("handle", "handle value");
  profileData.append("location", "location value");
  profileData.append("bio", "bio value");
  profileData.append("twitter", "");
  profileData.append("facebook", "");
  profileData.append("linkedin", "");
  profileData.append("youtube", "");
  profileData.append("instagram", "");

  wrapper
    .find("#handle")
    .simulate("change", { target: { name: "handle", value: "handle value" } });
  wrapper.find("#location").simulate("change", {
    target: { name: "location", value: "location value" }
  });
  wrapper
    .find("#bio")
    .simulate("change", { target: { name: "bio", value: "bio value" } });
  // wrapper
  //   .find("#facebook")
  //   .simulate("change", {
  //     target: { name: "facebook", value: "facebook value" }
  //   });
  // wrapper
  //   .find("#instagram")
  //   .simulate("change", {
  //     target: { name: "instagram", value: "instagram value" }
  //   });
  // wrapper
  //   .find("#youtube")
  //   .simulate("change", {
  //     target: { name: "youtube", value: "youtube value" }
  //   });
  // wrapper
  //   .find("#twitter")
  //   .simulate("change", {
  //     target: { name: "twitter", value: "twitter value" }
  //   });
  // wrapper
  //   .find("#linkedin")
  //   .simulate("change", {
  //     target: { name: "linkedin", value: "linkedin value" }
  //   });

  it("calls function with correct data", () => {
    expect(mockCreateProfilefn.mock.calls[0][0]).toEqual(profileData);
  });
});
