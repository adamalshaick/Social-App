import React from "react";
import { shallow } from "enzyme";
import { Dashboard } from "../../../components/dashboard/Dashboard";
import toJson from "enzyme-to-json";
import FriendRequests from "../../../components/friendRequests/FriendRequests";

describe("render component", () => {
  const Props = {
    auth: {},
    profile: {
      currentProfile: {
        friendRequests: []
      }
    }
  };

  const wrapper = shallow(<Dashboard {...Props} />);
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("no friend requests", () => {
  const Props = {
    auth: {},
    profile: {
      currentProfile: {
        friendRequests: []
      }
    }
  };

  const wrapper = shallow(<Dashboard {...Props} />);
  it("doesnt display friend requests array", () => {
    expect(wrapper.find(FriendRequests).length).toEqual(0);
  });
});

describe("there are friend requests", () => {
  const PropsWithRequests = {
    auth: {},
    profile: {
      currentProfile: {
        friendRequests: ["request", "request2"]
      }
    }
  };
  const wrapper = shallow(<Dashboard {...PropsWithRequests} />);
  it("displays friend requests array", () => {
    expect(wrapper.find(FriendRequests).length).toEqual(1);
  });
});
