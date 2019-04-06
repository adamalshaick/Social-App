import React from "react";
import { shallow } from "enzyme";
import { Feed } from "../../../components/feed/Feed";
import toJson from "enzyme-to-json";

describe("render component", () => {
  const Props = {
    profile: {
      currentProfile: {}
    }
  };

  const wrapper = shallow(<Feed {...Props} />);
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
