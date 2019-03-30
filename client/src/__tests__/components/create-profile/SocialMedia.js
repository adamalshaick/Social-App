import React from "react";
import { shallow } from "enzyme";
import SocialMedia from "../../../components/create-profile/SocialMedia";
import toJson from "enzyme-to-json";

const Props = {
  errors: {}
};

const wrapper = shallow(<SocialMedia {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
