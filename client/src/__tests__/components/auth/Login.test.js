import React from "react";
import { Login } from "../../../components/auth/Login";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockLoginfn = jest.fn();
const Props = {
  errors: {}
};
let wrapper;

wrapper = shallow(<Login {...Props} loginUser={mockLoginfn} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("login action", () => {
  wrapper
    .find("#email")
    .simulate("change", { target: { name: "email", value: "test@gmail.com" } });

  wrapper.find("#password").simulate("change", {
    target: { name: "password", value: "passwordTest" }
  });

  it("should call the mock login function", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(mockLoginfn.mock.calls.length).toEqual(1);
  });

  it("calls function with correct data", () => {
    expect(mockLoginfn.mock.calls[0][0]).toEqual({
      email: "test@gmail.com",
      password: "passwordTest"
    });
  });
});
