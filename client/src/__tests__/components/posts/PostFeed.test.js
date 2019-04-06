import React from "react";
import PostFeed from "../../../components/posts/PostFeed";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

const Props = {
  posts: [],
  profile: {}
};

wrapper = shallow(<PostFeed {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
