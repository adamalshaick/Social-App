import React from "react";
import { RequestItem } from "../../../components/friendRequests/RequestItem";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

const Props = {
  request: {
    user: "user",
    handle: "handle",
    avatar: "avatar"
  },

  profile: {
    handle: "handle"
  },

  profiles: [
    {
      user: {
        _id: "user"
      },
      handle: "handle"
    },
    {
      user: {
        _id: "user2"
      },
      handle: "handle"
    }
  ]
};

wrapper = shallow(<RequestItem {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
