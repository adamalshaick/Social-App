import React from "react";
import { shallow } from "enzyme";
import CommentFeed from "../../../components/comments/CommentFeed";
import toJson from "enzyme-to-json";

const Props = {
  comments: [],
  postId: "postId"
};

const wrapper = shallow(<CommentFeed {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
