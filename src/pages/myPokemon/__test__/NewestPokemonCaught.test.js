import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import reducer from "store/reducer";
import NewestPokemonCaught from "../NewestPokemonCaught";

function renderWithRedux(
  component,
  { initStore, store = createStore(reducer, initStore) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

const myPokemon = [
  { nickname: "pokemon1", id: "6", name: "charizard" },
  { nickname: "pokemon2", id: "25", name: "pikachu" },
];

describe("render newest pokemon", () => {
  it("should render description text if there no pokemon caught", () => {
    let { getByText } = renderWithRedux(
      <HashRouter>
        <NewestPokemonCaught />
      </HashRouter>
    );

    expect(getByText(/Newest Pokemon caught/i)).toBeInTheDocument();
    expect(
      getByText(/You have not catch any pokemon yet/i)
    ).toBeInTheDocument();
    expect(getByText(/Please checkout pokemon/i)).toBeInTheDocument();
  });

  it("should render the newest pokemon caught", () => {
    let { getByText } = renderWithRedux(
      <HashRouter>
        <NewestPokemonCaught myPokemon={myPokemon} />
      </HashRouter>
    );

    expect(getByText(/types/i)).toBeInTheDocument();
    setTimeout(() => {
      expect(getByText(/pokemon1/i)).toBeInTheDocument();
    }, 1000);
    expect(getByText(/moves/i)).toBeInTheDocument();
    expect(getByText(/remove/i)).toBeInTheDocument();
  });
});
