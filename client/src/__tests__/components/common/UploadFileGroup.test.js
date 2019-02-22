import React from "react";
import UploadFileGroup from "../../../components/common/UploadFileGroup";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<UploadFileGroup />).toJSON();
describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
