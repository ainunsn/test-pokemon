import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListPokemon from "../ListPokemon";

const pokemons = [];

describe("List Pokemon", () => {
  it("should render the list of pokemon", () => {
    render(<ListPokemon pokemon={pokemons} />);
  });
});
