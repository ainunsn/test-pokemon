import { render } from "@testing-library/react";
import React from "react";
import PokemonForms from "../PokemonForms";

describe("PokemonForms", () => {
  it("should render component correctly", () => {
    let { getByText } = render(<PokemonForms name={"electric"} />);
    expect(getByText("Electric")).toBeInTheDocument();
  });
});
