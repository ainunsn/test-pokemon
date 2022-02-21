import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Badge from "../Badge";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Badge />, div);
});

it("renders badge correctly", () => {
  const { getByTestId } = render(<Badge value={"value"} />);
  expect(getByTestId("custom-badge")).toHaveTextContent("Value");
});

// snapshot test
it("match snapshot", () => {
  const tree = renderer.create(<Badge value={"value"} />);

  expect(tree).toMatchSnapshot();
});
