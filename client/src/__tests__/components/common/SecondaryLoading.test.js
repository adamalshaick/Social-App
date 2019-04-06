import React from "react";
import SecondaryLoading from "../../../components/common/SecondaryLoading";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<SecondaryLoading />).toJSON();

describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
