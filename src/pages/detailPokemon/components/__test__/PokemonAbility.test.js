import { render } from "@testing-library/react";
import React from "react";
import PokemonAbility from "../PokemonAbility";

describe("PokemonAbility", () => {
  it("should render component correctly", () => {
    let { getByText } = render(<PokemonAbility ability={{ name: "move" }} />);
    expect(getByText('Move')).toBeInTheDocument()
  });
});
