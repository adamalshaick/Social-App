import React from "react";
import { PostForm } from "../../../components/posts/PostForm";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let wrapper;

const Props = {
  errors: {}
};

wrapper = shallow(<PostForm {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
