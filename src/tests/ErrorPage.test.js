import React from "react";
import renderer from "react-test-renderer";
import ErrorPage from "../components/ErrorPage";

it("should render correctly", () => {
  const tree = renderer.create(<ErrorPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
