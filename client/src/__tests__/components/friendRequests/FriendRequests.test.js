import React from "react";
import FriendRequests from "../../../components/friendRequests/FriendRequests";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

const Props = {
  profile: {
    friendRequests: [{ _id: "id" }, { _id: "id" }]
  },

  profiles: {}
};

wrapper = shallow(<FriendRequests {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
