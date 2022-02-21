import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pokemon from "../Pokemon";
import { BrowserRouter, HashRouter } from "react-router-dom";

const MockPokemon = ({ url, name }) => {
  return (
    <HashRouter>
      <Pokemon url={url} name={name} />
    </HashRouter>
  );
};

describe("Pokemon", () => {
  it("should render the list of pokemon", async () => {
    const { getByText, findByTestId } = render(
      <MockPokemon
        url="https://pokeapi.co/api/v2/pokemon/1/"
        name="bulbasaur"
      />
    );
    
    expect(await findByTestId('pokemon-image')).toBeInTheDocument()
    expect(getByText("Bulbasaur")).toBeInTheDocument();
  });
});
