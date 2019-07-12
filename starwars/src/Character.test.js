import React from "react";

import renderer from "react-test-renderer";
import Character from "./components/Character";

describe("<Character />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Character />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
