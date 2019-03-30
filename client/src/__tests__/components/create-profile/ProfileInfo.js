import React from "react";
import { shallow } from "enzyme";
import ProfileInfo from "../../../components/create-profile/ProfileInfo";
import toJson from "enzyme-to-json";

const Props = {
  errors: {}
};

const wrapper = shallow(<ProfileInfo {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
