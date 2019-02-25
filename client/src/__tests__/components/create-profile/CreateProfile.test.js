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
