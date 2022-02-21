import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "../Banner";

describe("Banner", () => {
  it("should render banner correctly", () => {
    let { getByText, getByTestId } = render(<Banner />);

    expect(getByText(/Find and catch your Pokemon/i));
    expect(getByTestId('pikachu-image')).toBeInTheDocument()
  });
});
