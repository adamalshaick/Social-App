import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

// describe("render component", () => {
//   it("renders card", () => {
//     const component = renderer.create(<PlanetCard />).toJSON();
//     expect(component).toMatchSnapshot();
//   });
//   it("renders wrapper", () => {
//     const component = renderer.create(<PlanetWrapper />).toJSON();
//     expect(component).toMatchSnapshot();
//   });
//   it("renders header", () => {
//     const component = renderer.create(<CardHeader />).toJSON();
//     expect(component).toMatchSnapshot();
//   });
// });

// describe("props test when active", () => {
//   it("shows planet card when active", () => {
//     const component = renderer.create(<PlanetCard active={true} />).toJSON();
//     expect(component).toHaveStyleRule("opacity", "1");
//     expect(component).toHaveStyleRule("visibility", "visible");
//   });
// });

// describe("props test when disabled", () => {
//   it("shows planet card when disabled", () => {
//     const component = renderer.create(<PlanetCard active={false} />).toJSON();
//     expect(component).toHaveStyleRule("opacity", "0");
//     expect(component).toHaveStyleRule("visibility", "hidden");
//   });
// });
