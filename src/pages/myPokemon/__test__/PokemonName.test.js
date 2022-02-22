import { render } from "@testing-library/react";
import React from "react";
import PokemonName from "../PokemonName";

describe("render pokemon name", () => {
  it("should render pokemon name component", () => {
    let { getByText } = render(<PokemonName name={"pikachu"} />);

    expect(getByText("Pikachu")).toBeInTheDocument();
  });
});
