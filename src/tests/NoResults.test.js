import React from "react";
import renderer from "react-test-renderer";
import NoResults from "../components/NoResults";

it("should render correctly", () => {
  const tree = renderer.create(<NoResults />).toJSON();
  expect(tree).toMatchSnapshot();
});
