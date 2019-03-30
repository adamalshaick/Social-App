import React from "react";
import { shallow } from "enzyme";
import { CommentForm } from "../../../components/comments/CommentForm";
import toJson from "enzyme-to-json";

const mockAddComment = jest.fn();

const Props = {
  currentProfile: {
    user: {
      name: "testName"
    },
    profileImage: "testAvatar"
  },
  postId: "postId"
};

const wrapper = shallow(<CommentForm {...Props} addComment={mockAddComment} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("add comment action", () => {
  it("calls function", () => {
    wrapper
      .find("#commentInput")
      .simulate("change", { target: { name: "text", value: "test comment" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockAddComment.mock.calls).toEqual([
      [
        "postId",
        { avatar: "testAvatar", name: "testName", text: "test comment" }
      ]
    ]);
  });
});
