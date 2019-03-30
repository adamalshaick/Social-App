import React from "react";
import { shallow } from "enzyme";
import { CommentItem } from "../../../components/comments/CommentItem";
import toJson from "enzyme-to-json";

const mockDeleteComment = jest.fn();

describe("render component", () => {
  const Props = {
    comment: {},
    auth: {
      user: {
        id: "id"
      }
    },
    postId: "postId"
  };

  const wrapper = shallow(
    <CommentItem {...Props} deleteComment={mockDeleteComment} />
  );

  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("current user's comment", () => {
  const PropsWhenIdsMatch = {
    comment: {
      user: "userId"
    },
    auth: {
      user: {
        id: "userId"
      }
    },
    postId: "postId"
  };
  const wrapper = shallow(
    <CommentItem {...PropsWhenIdsMatch} deleteComment={mockDeleteComment} />
  );
  it("shows delete button", () => {
    expect(wrapper.find("#deleteButton").length).toEqual(1);
  });
  it("calls delete fn", () => {
    wrapper.find("#deleteButton").simulate("click", { preventDefault() {} });
    expect(mockDeleteComment.mock.calls.length).toEqual(1);
  });
});

describe("other user's comment", () => {
  const PropsWhenIdsDontMatch = {
    comment: {
      user: "otherUserId"
    },
    auth: {
      user: {
        id: "userId"
      }
    },
    postId: "postId"
  };
  const wrapper = shallow(
    <CommentItem {...PropsWhenIdsDontMatch} deleteComment={mockDeleteComment} />
  );
  it("doesnt show delete button", () => {
    expect(wrapper.find("#deleteButton").length).toEqual(0);
  });
});
