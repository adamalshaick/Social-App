import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import {
  StyledNavbar,
  NavigationButton,
  NavigationMarker
} from "../../../../components/common/styles/Navbar";

describe("render component", () => {
  it("renders navbar", () => {
    const component = renderer.create(<StyledNavbar />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders button", () => {
    const component = renderer.create(<NavigationButton />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("renders marker", () => {
    const Props = {
      hovered: false
    };
    const component = renderer.create(<NavigationMarker {...Props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe("button hover behaviour", () => {
  it("shows marker on button hover", () => {
    const component = renderer
      .create(<NavigationMarker hovered={true} />)
      .toJSON();
    expect(component).toHaveStyleRule("opacity", "1");
  });

  it("doesnt show marker when button isnt hovered", () => {
    const component = renderer
      .create(<NavigationMarker hovered={false} />)
      .toJSON();
    expect(component).toHaveStyleRule("opacity", "0");
  });
});
